<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
|--------------------------------------------------------------------------
| Public API Routes
|--------------------------------------------------------------------------
*/
//Route::prefix('komyt')->group(function () {
// Setup Wizard
    Route::group(['middleware' => ['api'], 'prefix' => 'setup'], function () {
        Route::post('/purchase-code', 'General\SetupWizardController@verify_purchase_code');
        Route::post('/database', 'General\SetupWizardController@setup_database');

        Route::post('/stripe-credentials', 'General\SetupWizardController@store_stripe_credentials');
        Route::post('/stripe-billings', 'General\SetupWizardController@store_stripe_billings');
        Route::post('/stripe-plans', 'General\SetupWizardController@store_stripe_plans');

        Route::post('/environment-setup', 'General\SetupWizardController@store_environment_setup');
        Route::post('/app-setup', 'General\SetupWizardController@store_app_settings');
        Route::post('/admin-setup', 'General\SetupWizardController@create_admin_account');

    });

// Upgrade App
    Route::group(['middleware' => ['api'], 'prefix' => 'upgrade'], function () {
        Route::post('/app', 'General\UpgradeAppController@upgrade');
    });

// Comment
    Route::group(['middleware' => ['api'], 'prefix' => 'comment'], function () {
        Route::post('/get-image', 'User\CommentController@getImage');
        Route::post('/store', 'User\CommentController@store')->name('store-comment');
        Route::post('/addCommentReply', 'User\CommentController@reply');
        Route::post('/addCommentLike', 'User\CommentController@likeComment');
        Route::post('/list', 'User\CommentController@list');
        Route::post('/updateComment/{id}', 'User\CommentController@updateComment');
        Route::post('/isLiked-ByMe', 'User\CommentController@isLikedByMe');
        Route::post('/deleteComment/{id}', 'User\CommentController@destroy');
        Route::post('/update/{id}/', 'User\CommentController@update');

    });

// Plans
//    Route::group(['middleware' => ['api'], 'prefix' => 'public'], function () {
    Route::group(['middleware' => ['api']], function () {
        Route::get('/pricing', 'General\PricingController@index');
    });

// Public routes
    Route::group(['middleware' => ['api']], function () {

        // Edit Functions
        Route::delete('/remove-item/{unique_id}/public/{token}', 'FileFunctions\EditItemsController@guest_delete_item');
        Route::patch('/rename-item/{unique_id}/public/{token}', 'FileFunctions\EditItemsController@guest_rename_item');
        Route::post('/create-folder/public/{token}', 'FileFunctions\EditItemsController@guest_create_folder');
        Route::patch('/move/{unique_id}/public/{token}', 'FileFunctions\EditItemsController@guest_move');
        Route::post('/upload/public/{token}', 'FileFunctions\EditItemsController@guest_upload');
        Route::post('/upload/public/{token}', 'FileFunctions\EditItemsController@guest_upload');

        // Sharing page browsing
        Route::get('/folders/{unique_id}/public/{token}', 'Sharing\FileSharingController@get_public_folders');
//      /folders/{unique_id}/{token}      this is make just to remove public from url
        Route::get('/folders/{unique_id}/{token}', 'Sharing\FileSharingController@get_public_folders');
        Route::get('/navigation/public/{token}', 'Sharing\FileSharingController@get_public_navigation_tree');
        Route::post('/shared/authenticate/{token}', 'Sharing\FileSharingController@authenticate');
        Route::post('/shared/project/{token}', 'Sharing\FileSharingController@authProjectShared');
        Route::get('/search/public/{token}', 'Sharing\FileSharingController@search_public');
        Route::get('/files/{token}/public', 'Sharing\FileSharingController@file_public');
        Route::get('/files-byToken/{token}', 'Sharing\FileSharingController@file_public_Token');
        Route::get('/filesDetail/{token}/public', 'Sharing\FileSharingController@file_detail_public');
        Route::get('/files/{id}', 'Sharing\FileSharingController@file_detail_reveiw');
        Route::get('/shared/{token}', 'FileFunctions\ShareController@show');
        Route::get('/sharedPresentation/{token}', 'FileFunctions\ShareController@show');
        Route::get('/sharedReview/{token}', 'FileFunctions\ShareController@show');

        //User  Invite People
        Route::post('/invite', 'User\CommentController@invitePeople');
        Route::post('/updateInvite', 'User\CommentController@updateInvite');
        Route::post('/add-team', 'Team\TeamController@store');
        Route::post('/total-team-members/{id}', 'Team\TeamMemberController@findMembers');
        Route::post('/team/{id}', 'Team\TeamController@findTeam');
        Route::post('/team-by-folder_id', 'Team\TeamController@findTeamById');
        Route::post('/shareInvite', 'Team\TeamMemberController@store');
        Route::post('/checkMember', 'Team\TeamMemberController@checkMember');
        Route::post('/total-project', 'Team\TeamMemberController@getTotalProject');

        //Notification
        Route::post('/notification/list', 'FileFunctions\ShareController@notifyList');
        Route::post('/notification-status', 'FileFunctions\ShareController@update_notif_status');

        // User reset password
        Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
        Route::post('/password/reset', 'Auth\ResetPasswordController@reset');

        // User authentication
        Route::post('/user/check', 'Auth\AuthController@check_account');
        Route::post('/user/register', 'Auth\AuthController@register');
        Route::post('/user/login', 'Auth\AuthController@login');

        // Pages
        Route::post('/contact', 'AppFunctionsController@contact_form');
        Route::get('/page/{slug}', 'AppFunctionsController@get_page');
        Route::get('/content', 'AppFunctionsController@get_settings');
    });

// User master Routes
    Route::group(['middleware' => ['auth:api', 'auth.master', 'scope:master']], function () {

        // User
        Route::patch('/user/relationships/settings', 'User\AccountController@update_user_settings');
        Route::post('/user/password', 'User\AccountController@change_password');
        Route::patch('/user/profile', 'User\AccountController@update_profile');
        Route::get('/user/subscription', 'User\SubscriptionController@show');
        Route::get('/user/invoices', 'User\AccountController@invoices');
        Route::get('/user/storage', 'User\AccountController@storage');
        Route::get('/user', 'User\AccountController@user');
        Route::get('/users/user-list', 'Auth\AuthController@list');
        Route::post('/users/project-user-list', 'Auth\AuthController@project_list');
        Route::post('/users/list', 'Auth\AuthController@user_unMembered');

        // Payment cards
        Route::delete('/user/payment-cards/{id}', 'User\PaymentMethodsController@delete');
        Route::patch('/user/payment-cards/{id}', 'User\PaymentMethodsController@update');
        Route::post('/user/payment-cards', 'User\PaymentMethodsController@store');
        Route::get('/user/payments', 'User\PaymentMethodsController@index');

        // Subscription
        Route::get('/stripe/setup-intent', 'User\SubscriptionController@stripe_setup_intent');
        Route::post('/subscription/upgrade', 'User\SubscriptionController@upgrade');
        Route::post('/subscription/cancel', 'User\SubscriptionController@cancel');
        Route::post('/subscription/resume', 'User\SubscriptionController@resume');

        // Browse
        Route::get('/participant-uploads', 'FileBrowser\BrowseController@participant_uploads');
        Route::get('/file-detail/{unique_id}', 'FileBrowser\BrowseController@file_detail');
        Route::get('/navigation', 'FileBrowser\BrowseController@navigation_tree');
        Route::get('/folders/{unique_id}', 'FileBrowser\BrowseController@folder');
        Route::get('/shared-all', 'FileBrowser\BrowseController@shared');
        Route::get('/latest', 'FileBrowser\BrowseController@latest');
        Route::get('/search', 'FileBrowser\BrowseController@search');
        Route::get('/trash', 'FileBrowser\BrowseController@trash');

        // Trash
        Route::patch('/restore-item/{unique_id}', 'FileFunctions\TrashController@restore');
        Route::delete('/empty-trash', 'FileFunctions\TrashController@clear');

        // Favourites
        Route::delete('/folders/favourites/{unique_id}', 'FileFunctions\FavouriteController@destroy');
        Route::post('/folders/favourites', 'FileFunctions\FavouriteController@store');

        // Share
        Route::delete('/share/{token}', 'FileFunctions\ShareController@destroy');
        Route::patch('/share/{token}', 'FileFunctions\ShareController@update');
        Route::post('/share', 'FileFunctions\ShareController@store');
        Route::post('/share-complete-folder', 'FileFunctions\ShareController@shareFolder');


        //Selected Project
        Route::post('/selected-project', 'FileFunctions\ShareController@selected_project');

        // Auth
        Route::get('/logout', 'Auth\AuthController@logout');
    });

// Admin
    Route::group(['middleware' => ['auth:api', 'auth.master', 'auth.admin', 'scope:master']], function () {

        // Admin
        Route::get('/dashboard', 'Admin\DashboardController@index');
        Route::get('/dashboard/new-users', 'Admin\DashboardController@new_registrations');

        // Get users info
        Route::get('/users/{id}/subscription', 'Admin\UserController@subscription');
        Route::get('/users/{id}/storage', 'Admin\UserController@storage');
        Route::get('/users/{id}/detail', 'Admin\UserController@details');
        Route::get('/users', 'Admin\UserController@users');

        // Edit users
        Route::post('/users/{id}/send-password-email', 'Admin\UserController@send_password_reset_email');
        Route::patch('/users/{id}/capacity', 'Admin\UserController@change_storage_capacity');
        Route::delete('/users/{id}/delete', 'Admin\UserController@delete_user');
        Route::patch('/users/{id}/role', 'Admin\UserController@change_role');
        Route::get('/users/{id}/invoices', 'Admin\UserController@invoices');
        Route::post('/users/create', 'Admin\UserController@create_user');

        // Plans
        Route::get('/plans/{id}/subscribers', 'Admin\PlanController@subscribers');
        Route::patch('/plans/{id}/update', 'Admin\PlanController@update');
        Route::delete('/plans/{id}', 'Admin\PlanController@delete');
        Route::post('/plans/store', 'Admin\PlanController@store');
        Route::get('/plans/{id}', 'Admin\PlanController@show');
        Route::get('/plans', 'Admin\PlanController@index');

        // Pages
        Route::get('/pages', 'Admin\PagesController@index');
        Route::get('/pages/{slug}', 'Admin\PagesController@show');
        Route::patch('/pages/{slug}', 'Admin\PagesController@update');

        // Invoices
        Route::get('/invoices/{token}', 'Admin\InvoiceController@show');
        Route::get('/invoices', 'Admin\InvoiceController@index');

        // Packages
        Route::get('/packages', 'Admin\PackageController@index');
        Route::post('/package-create', 'Admin\PackageController@store');
        Route::post('/package-update', 'Admin\PackageController@update');
        Route::delete('/package-delete', 'Admin\PackageController@delete');

        // Settings
        Route::post('/settings/email', 'SettingController@set_email');
        Route::post('/settings/stripe', 'SettingController@set_stripe');
        Route::patch('/settings', 'SettingController@update');
        Route::get('/settings', 'SettingController@show');
        Route::get('/flush-cache', 'AppFunctionsController@flush_cache');
    });

// Protected sharing routes for authenticated user
    Route::group(['middleware' => ['auth:api', 'auth.shared', 'scope:visitor,editor']], function () {

        // Browse folders & files
        Route::get('/folders/{unique_id}/private', 'Sharing\FileSharingController@get_private_folders');
        Route::get('/navigation/private', 'Sharing\FileSharingController@get_private_navigation_tree');
        Route::get('/search/private', 'Sharing\FileSharingController@search_private');
        Route::get('/files/private', 'Sharing\FileSharingController@file_private');
    });

// User master,editor routes

    Route::group(['middleware' => ['auth:api', 'auth.shared', 'auth.master', 'scope:master,editor']], function () {

        // Edit items
        Route::delete('/remove-item/{unique_id}', 'FileFunctions\EditItemsController@user_delete_item');
        Route::patch('/rename-item/{unique_id}', 'FileFunctions\EditItemsController@user_rename_item');
        Route::post('/create-folder', 'FileFunctions\EditItemsController@user_create_folder');
        Route::patch('/move/{unique_id}', 'FileFunctions\EditItemsController@user_move');
        Route::patch('/version/{unique_id}', 'FileFunctions\EditItemsController@video_version');
        Route::post('/version/delete', 'FileFunctions\EditItemsController@delete_vedio');
        Route::post('/version', 'FileFunctions\EditItemsController@get_version_list');
        Route::post('/version-comparison', 'FileFunctions\EditItemsController@get_version_comparison');
        Route::post('/version-parent-alter', 'FileFunctions\EditItemsController@change_version_parent');

        Route::patch('/copy/{unique_id}', 'FileFunctions\EditItemsController@user_copy');

        Route::post('/upload', 'FileFunctions\EditItemsController@user_upload');
        Route::post('/update-status', 'FileFunctions\EditItemsController@update_status');
        Route::post('/add-description', 'FileFunctions\EditItemsController@add_description');
        Route::post('/upload/image', 'FileFunctions\EditItemsController@image_upload');

    });
//});
