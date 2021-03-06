angular.module('WordApp.config', [])

// Replace with your Wordpress Blog WP REST API url 
.constant('WORDPRESS_API_URL', 'http://elremontada.info/wp-json/wp/v2/')

// Replace with your Google Project Number https://documentation.onesignal.com/v2.0/docs/android-generating-a-gcm-push-notification-key
.constant('GOOGLE_PROJECT_NUMBER', '780427427778')

// Replace with your OneSignal AppId https://documentation.onesignal.com/docs/phonegap-sdk-installation#2-add-required-code
.constant('ONESIGNAL_APP_ID', '780427427778')

// Change color your Ionic application to light, stable, positive, calm, balanced, energized, assertive, royal or dark 
.constant('IONIC_APP_COLOR', 'assertive')

// Change Posts page template to cards, cards2, list
.constant('POSTS_TEMPLATE', 'cards')

// Replace with your Android package name and IOS app ID
.constant('ANDROID_PACKAGE_NAME', 'com.google.android.apps.maps')
.constant('IOS_APP_ID', '<my_app_id>')

// Replace with your Primary Email to send Feedback
.constant('PRIMARY_EMAIL', 'mohamed@assem.ga')

// Replace with email to send copy Feedback or leave empty
.constant('COPY_EMAIL', 'mohamed@assem.ga')

// Replace with phone number for send SMS
.constant('SMS_PHONE_NUMBER', '+201007718593');
