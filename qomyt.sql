-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 02, 2020 at 12:34 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qomyt`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favourite_folder`
--

DROP TABLE IF EXISTS `favourite_folder`;
CREATE TABLE IF NOT EXISTS `favourite_folder` (
  `user_id` bigint(20) NOT NULL,
  `folder_unique_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_manager_files`
--

DROP TABLE IF EXISTS `file_manager_files`;
CREATE TABLE IF NOT EXISTS `file_manager_files` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `unique_id` int(11) NOT NULL,
  `folder_id` int(11) NOT NULL DEFAULT 0,
  `thumbnail` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `basename` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mimetype` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `filesize` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metadata` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_scope` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'master',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_manager_folders`
--

DROP TABLE IF EXISTS `file_manager_folders`;
CREATE TABLE IF NOT EXISTS `file_manager_folders` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `unique_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_scope` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'master',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_05_03_000001_create_customer_columns', 1),
(9, '2019_05_03_000002_create_subscriptions_table', 1),
(10, '2019_05_03_000003_create_subscription_items_table', 1),
(11, '2019_08_15_171328_create_file_manager_folders', 1),
(12, '2019_08_15_171345_create_file_manager_files', 1),
(13, '2019_08_19_000000_create_failed_jobs_table', 1),
(14, '2020_03_03_065147_add_user_id_to_file_manager_files_table', 1),
(15, '2020_03_03_065155_add_user_id_to_file_manager_folders_table', 1),
(16, '2020_03_03_070319_create_favourites_folders_table', 1),
(17, '2020_04_20_071047_create_shares_table', 1),
(18, '2020_04_24_055817_add_user_scope_to_file_manager_files_table', 1),
(19, '2020_04_24_080943_add_user_scope_to_file_manager_folders_table', 1),
(20, '2020_05_26_062714_add_role_to_users_table', 1),
(21, '2020_05_26_092649_create_user_settings_table', 1),
(22, '2020_06_02_073651_add_attributes_to_user_settings_table', 1),
(23, '2020_06_25_142635_create_settings_table', 1),
(24, '2020_07_08_080255_create_pages_table', 1),
(25, '2020_08_25_143449_add_expiration_at_attribute_to_shares_table', 1),
(26, '2020_09_04_085714_add_exif_data_to_file_manager_files_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'vuefilemanager', 'BdwDMUcNzueFRkBdP3t8S9RacevpnoI4DEEi4bXO', 'http://localhost', 0, 1, 0, '2020-12-01 14:17:23', '2020-12-01 14:17:23'),
(2, NULL, 'shared', '8pusWFpxIZ2o5JSUDXG95xvrkwPoxwO386GiJG5N', 'http://localhost', 1, 0, 0, '2020-12-01 14:17:23', '2020-12-01 14:17:23');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 2, '2020-12-01 14:17:23', '2020-12-01 14:17:23');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
CREATE TABLE IF NOT EXISTS `pages` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `visibility` tinyint(1) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `visibility`, `title`, `slug`, `content`) VALUES
(1, 1, 'Terms of Service', 'terms-of-service', 'Laoreet cum hendrerit iaculis arcu phasellus congue et elementum, pharetra risus imperdiet aptent posuere rutrum parturient blandit, dapibus tellus ridiculus potenti aliquam sociis turpis. Nullam commodo eget laoreet risus cursus vel placerat, in dapibus sociis gravida faucibus sodales, fringilla potenti elit semper iaculis ullamcorper. Dignissim vulputate pretium montes pellentesque mollis, consectetur adipiscing curabitur semper sem rhoncus, litora viverra curae proin.'),
(2, 1, 'Privacy Policy', 'privacy-policy', 'Sit orci justo augue maecenas laoreet consectetur natoque magnis in viverra sagittis, himenaeos urna facilisis mus proin primis diam accumsan tristique inceptos. Primis quisque posuere sit praesent lobortis feugiat semper convallis facilisis, vivamus gravida ligula nostra curae eu donec duis parturient senectus, arcu dolor viverra penatibus natoque cum nisi commodo. Litora sociis mauris justo nullam suspendisse mattis maecenas nascetur congue phasellus cras ultricies posuere donec, dapibus egestas diam lacus ornare montes senectus tincidunt eu taciti sed consequat.'),
(3, 1, 'Cookie Policy', 'cookie-policy', 'Metus penatibus ligula dolor natoque non habitasse laoreet facilisis, libero vivamus eget semper vulputate interdum integer, phasellus lorem enim blandit consectetur nullam sollicitudin. Hendrerit interdum luctus ut in molestie himenaeos eros cum laoreet parturient est, eu lectus hac et netus viverra dictumst congue elit sem senectus litora, fames scelerisque adipiscing inceptos fringilla montes sociosqu suscipit auctor potenti. Elementum lacus vulputate viverra ac morbi ligula ipsum facilisi, sit eu imperdiet lacinia congue dis vitae.');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
CREATE TABLE IF NOT EXISTS `settings` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `settings_name_unique` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`) VALUES
(1, 'section_features', '1'),
(2, 'section_feature_boxes', '1'),
(3, 'section_pricing_content', '1'),
(4, 'section_get_started', '1'),
(5, 'header_title', 'Simple <span style=\"color: #41B883\">&</span> Powerful Personal Cloud Storage'),
(6, 'header_description', 'Your private cloud storage software build on Laravel & Vue.js. No limits & no monthly fees. Truly freedom.'),
(7, 'features_title', 'The Fastest Growing <span style=\"color: #41B883\">File Manager</span> on the CodeCanyon Market'),
(8, 'features_description', 'Your private cloud storage software build on Laravel & Vue.js. No limits & no monthly fees. Truly freedom.'),
(9, 'feature_title_1', 'Truly Freedom'),
(10, 'feature_description_1', 'You have full control over VueFileManager, no third authorities will control your service or usage, only you.'),
(11, 'feature_title_2', 'The Sky is the Limit'),
(12, 'feature_description_2', 'VueFileManager is cloud storage software. You have to install and running application on your own server hosting.'),
(13, 'feature_title_3', 'No Monthly Fees'),
(14, 'feature_description_3', 'When you running VueFileManager on your own server hosting, anybody can\'t control your content or resell your user data. Your data is safe.'),
(15, 'pricing_title', 'Pick the <span style=\"color: #41B883;\">Best Plan</span> For Your Needs'),
(16, 'pricing_description', 'Your private cloud storage software build on Laravel & Vue.js. No limits & no monthly fees. Truly freedom.'),
(17, 'get_started_title', 'Ready to Get <span style=\"color: #41B883\">Started</span><br> With Us?'),
(18, 'get_started_description', 'Your private cloud storage software build on Laravel & Vue.js. No limits & no monthly fees. Truly freedom.'),
(19, 'footer_content', '© 2020 Simple & Powerful Personal Cloud Storage. Developed by <a href=\"https://hi5ve.digital\" target=\"_blank\">Hi5Ve.Digital</a>'),
(20, 'setup_wizard_database', '1'),
(21, 'app_title', 'Qomyt'),
(22, 'app_description', 'This is description'),
(23, 'contact_email', 'devtest@gmail.com'),
(24, 'registration', '1'),
(25, 'storage_limitation', '1'),
(26, 'storage_default', '5'),
(27, 'setup_wizard_success', '1'),
(28, 'license', 'b6896a44017217c36f4a6fdc56699728'),
(29, 'purchase_code', 'f5a923c8-15d6-4297-bb65-33bbe30541a5');

-- --------------------------------------------------------

--
-- Table structure for table `shares`
--

DROP TABLE IF EXISTS `shares`;
CREATE TABLE IF NOT EXISTS `shares` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `token` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_id` bigint(20) NOT NULL,
  `type` enum('file','files','folder') COLLATE utf8mb4_unicode_ci NOT NULL,
  `permission` enum('visitor','editor') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `protected` tinyint(1) NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expire_in` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shares_token_unique` (`token`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

DROP TABLE IF EXISTS `subscriptions`;
CREATE TABLE IF NOT EXISTS `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_plan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subscriptions_user_id_stripe_status_index` (`user_id`,`stripe_status`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscription_items`
--

DROP TABLE IF EXISTS `subscription_items`;
CREATE TABLE IF NOT EXISTS `subscription_items` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subscription_id` bigint(20) UNSIGNED NOT NULL,
  `stripe_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_plan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subscription_items_subscription_id_stripe_plan_unique` (`subscription_id`,`stripe_plan`),
  KEY `subscription_items_stripe_id_index` (`stripe_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `stripe_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_brand` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_last_four` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_stripe_id_index` (`stripe_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `email`, `email_verified_at`, `password`, `avatar`, `remember_token`, `created_at`, `updated_at`, `stripe_id`, `card_brand`, `card_last_four`, `trial_ends_at`) VALUES
(1, 'admin', 'Arcocia Admin', 'arcocia@qomyt.com', NULL, '$2y$10$Bbeas.FXPQjIf2ZcEbeHBukeeeAdLj.QUDNBTmZz.AJ8TEI2ckDHO', NULL, NULL, '2020-12-01 14:17:22', '2020-12-01 14:17:22', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_settings`
--

DROP TABLE IF EXISTS `user_settings`;
CREATE TABLE IF NOT EXISTS `user_settings` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `storage_capacity` int(11) NOT NULL DEFAULT 5,
  `billing_name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_state` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_city` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_postal_code` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_country` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_phone_number` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `storage_capacity`, `billing_name`, `billing_address`, `billing_state`, `billing_city`, `billing_postal_code`, `billing_country`, `billing_phone_number`) VALUES
(1, 1, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
