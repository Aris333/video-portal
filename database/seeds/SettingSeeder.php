<?php

use App\Page;
use App\Setting;
use App\User;
use App\UserSettings;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generate app key
        Artisan::call('key:generate', [
            '--force' => true
        ]);

        // // Migrate database
        // Artisan::call('migrate:fresh', [
        //     '--force' => true
        // ]);

        

        // Get options
        $settings = collect([
            [
                'name'  => 'setup_wizard_database',
                'value' => 1,
            ],
            [
                'name'  => 'app_title',
                'value' => "komyt",
            ],
            [
                'name'  => 'app_description',
                'value' => "This is description",
            ],
            [
                'name'  => 'contact_email',
                'value' => "devtest@gmail.com",
            ],
            [
                'name'  => 'registration',
                'value' => 1,
            ],
            [
                'name'  => 'storage_limitation',
                'value' => 1,
            ],
            [
                'name'  => 'storage_default',
                'value' => 5,
            ],
            [
                'name'  => 'setup_wizard_success',
                'value' => 1,
            ],
            [
                'name'  => 'license',
                'value' => "b6896a44017217c36f4a6fdc56699728",
            ],
            [
                'name'  => 'purchase_code',
                'value' => "f5a923c8-15d6-4297-bb65-33bbe30541a5",
            ]
        ]);

        // Store options
        $settings->each(function ($col) {
            Setting::updateOrCreate(['name' => $col['name']], $col);
        });

        /**
         * Create User 
         **/
        $user = User::forceCreate([
            'avatar'   =>  null,
            'name'     => "Arcocia Admin",
            'role'     => 'admin',
            'email'    => "arcocia@komyt.com",
            'password' => Hash::make("password"),
        ]);

        // Get default storage capacity
        $storage_capacity = Setting::where('name', 'storage_default')->first();

        // Create settings
        UserSettings::forceCreate([
            'user_id'          => $user->id,
            'storage_capacity' => $storage_capacity->value,
        ]);
        /**
         * Extended License 
         * 
         **/
        $pages = collect(config('content.pages'));
        $content = collect(config('content.content'));

        $content->each(function ($content) {
            Setting::updateOrCreate($content);
        });

        $pages->each(function ($page) {
            Page::updateOrCreate($page);
        });

        // Storage setting
        setEnvironmentValue([
            'FILESYSTEM_DRIVER' => 'local',
        ]);

        /**
         *  Passport Settings
         *
         * */
        // Create Passport Keys
        Artisan::call('passport:keys', [
            '--force' => true
        ]);

        // Create Password grant client
        Artisan::call('passport:client', [
            '--password' => true,
            '--name'     => 'vuefilemanager',
        ]);

        // Create Personal access client
        Artisan::call('passport:client', [
            '--personal' => true,
            '--name'     => 'shared',
        ]);

        // Get generated client
        $client = DB::table('oauth_clients')->where('name', '=', 'vuefilemanager')->first();

        // Set passport client to .env
        setEnvironmentValue([
            'PASSPORT_CLIENT_ID'     => $client->id,
            'PASSPORT_CLIENT_SECRET' => $client->secret,
        ]);

        /**
         * Login Cookies
         *  
         **/

        request()->request->add([
            'grant_type'    => 'password',
            'client_id'     => config('services.passport.client_id'),
            'client_secret' => config('services.passport.client_secret'),
            'username'      => $user->email,
            'password'      => "password",
            'scope'         => 'master',
        ]);

        // Optimize Clear
        Artisan::call('optimize:clear');

        return Request::create(url('/oauth/token'), 'POST', request()->all());
    }
}
