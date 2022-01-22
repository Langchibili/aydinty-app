import Script from 'next/Script';

export default function FootMeta(){
      return (
        <>
        <Script
          data-cfasync="false"
          src="/jquery-3.6.0.slim.min.js"
        />
        <Script
          data-cfasync="false"
          src="/cdn-cgi/Scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          strategy="lazyOnload"
        />
        <Script type="text/javaScript">
          (function () {"{"}
          var c = document.body.className; c = c.replace(/woocommerce-no-js/,
          'woocommerce-js'); document.body.className = c;
          {"}"})();
        </Script>
        <link
          rel="stylesheet"
          id="e-animations-css"
          href="/theme/wp-content/plugins/elementor/assets/lib/animations/animations.min9d52.css?ver=3.5.1"
          type="text/css"
          media="all"
        />
        <Script
          src="/theme/wp-includes/js/comment-reply.min080f.js?ver=5.8.2"
          strategy="lazyOnload"
          id="comment-reply-js"
        />
        <Script id="gamipress-js-js-extra">
          /* &lt;![CDATA[ */ var gamipress = {"{"}
          "ajaxurl":"\/vikinger-theme\//theme/wp-admin\/admin-ajax.php","nonce":"b682fff8c7","achievement_fields":["id","title","link","thumbnail","points_awarded","points_awarded_thumbnail","excerpt","times_earned","global_times_earned","steps","toggle","unlock_button","earners","earners_limit","layout","align"]
          {"}"}; /* ]]&gt; */
        </Script>
        <Script
          src="/theme/wp-content/plugins/gamipress/assets/js/gamipress.min77e6.js?ver=2.2.1"
          strategy="lazyOnload"
          id="gamipress-js-js"
        />
        <Script id="gamipress-events-js-js-extra">
          /* &lt;![CDATA[ */ var gamipress_events = {"{"}
          "ajaxurl":"\/vikinger-theme\//theme/wp-admin\/admin-ajax.php","nonce":"b682fff8c7","user_id":"0","post_id":"876","server_date":"2022-01-05","debug_mode":""
          {"}"}; /* ]]&gt; */
        </Script>
        <Script
          src="/theme/wp-content/plugins/gamipress/assets/js/gamipress-events.min77e6.js?ver=2.2.1"
          strategy="lazyOnload"
          id="gamipress-events-js-js"
        />
        <Script
          src="/theme/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min8811.js?ver=2.7.0-wc.6.0.0"
          strategy="lazyOnload"
          id="jquery-blockui-js"
        />
        <Script id="wc-add-to-cart-js-extra">
          /* &lt;![CDATA[ */ var wc_add_to_cart_params = {"{"}
          "ajax_url":"\/vikinger-theme\//theme/wp-admin\/admin-ajax.php","wc_ajax_url":"\/vikinger-theme\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View
          cart","cart_url":"https:\/\/odindesignthemes.com\/vikinger-theme\/cart\/","is_cart":"","cart_redirect_after_add":"no"
          {"}"}; /* ]]&gt; */
        </Script>
        {/* <Script
          src="/theme/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.minaf8e.js?ver=6.0.0"
          strategy="lazyOnload"
          id="wc-add-to-cart-js"
        /> */}
        <Script
          src="/theme/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.mineff6.js?ver=2.1.4-wc.6.0.0"
          strategy="lazyOnload"
          id="js-cookie-js"
        />
        <Script id="woocommerce-js-extra">
          /* &lt;![CDATA[ */ var woocommerce_params = {"{"}
          "ajax_url":"\/vikinger-theme\//theme/wp-admin\/admin-ajax.php","wc_ajax_url":"\/vikinger-theme\/?wc-ajax=%%endpoint%%"
          {"}"}; /* ]]&gt; */
        </Script>
        <Script
          src="/theme/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.minaf8e.js?ver=6.0.0"
          strategy="lazyOnload"
          id="woocommerce-js"
        />
        <Script id="wc-cart-fragments-js-extra">
          /* &lt;![CDATA[ */ var wc_cart_fragments_params = {"{"}
          "ajax_url":"\/vikinger-theme\//theme/wp-admin\/admin-ajax.php","wc_ajax_url":"\/vikinger-theme\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_7c1f29329f60bf53debec3276e196883","fragment_name":"wc_fragments_7c1f29329f60bf53debec3276e196883","request_timeout":"5000"
          {"}"}; /* ]]&gt; */
        </Script>
        {/* <Script
          src="/theme/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.minaf8e.js?ver=6.0.0"
          strategy="lazyOnload"
          id="wc-cart-fragments-js"
        /> */}
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/swiper.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-swiper-Scripts-js"
        />
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/xm_accordion.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-xmaccordion-Scripts-js"
        />
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/xm_dropdown.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-xmdropdown-Scripts-js"
        />
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/xm_hexagon.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-xmhexagon-Scripts-js"
        />
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/xm_popup.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-xmpopup-Scripts-js"
        />
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/xm_progressBar.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-xmprogressBar-Scripts-js"
        />
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/xm_tab.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-xmtab-Scripts-js"
        />
        <Script
          src="/theme/wp-content/themes/vikinger/js/vendor/xm_tooltip.min8a54.js?ver=1.0.0"
          strategy="lazyOnload"
          id="vikinger-xmtooltip-Scripts-js"
        />
        <Script id="vikinger-main-Scripts-js-extra">
          /* &lt;![CDATA[ */ var vikinger_constants = {"{"}
          "vikinger_url":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-content\/themes\/vikinger","home_url":"https:\/\/odindesignthemes.com\/vikinger-theme\/","ajax_url":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-admin\/admin-ajax.php","/theme/wp_rest_nonce":"f9eb10fa6a","vikinger_ajax_nonce":"955d7a35d2","rest_root":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-json\/","plugin_active":
          {"{"}
          "buddypress":true,"bp-better-messages":true,"bp-verified-member":true,"paid-memberships-pro":true,"pmpro-buddypress":true,"pmpro-bbpress":true,"advanced-ads":false,"bbpress":true,"gamipress":true,"gamipress-buddypress-integration":true,"gamipress-bbpress-integration":true,"woocommerce":true,"elementor":true,"vikinger-buddypress-extension":true,"vkreact":true,"vkreact-buddypress":true,"vkmedia":true,"vikinger-widgets":true,"vikinger-metaboxes":true,"buddypress_groups":true,"buddypress_friends":true,"buddypress_messages":true,"buddypress_notifications":true,"advanced-ads-pro":false
          {"}"},"gamipress_badge_type_exists":"1","colors":{"{"}
          "--color-/theme/wplogin-body":"#fff","--color-/theme/wplogin-header-text":"#fff","--color-header-background":"#615dfa","--color-header-logo-background":"#00c7d9","--color-header-text":"#fff","--color-header-icon":"#8b88ff","--color-header-icon-hover":"#fff","--color-header-profile-settings-icon":"#fff","--color-header-mobilemenu-trigger-icon":"#fff","--color-header-divider":"#7a77fd","--color-header-input-background":"#4e4ac8","--color-header-input-placeholder":"#8b88ff","--color-header-progressbar-line-gradient-start":"#41efff","--color-header-progressbar-line-gradient-end":"#41efff","--color-header-progressbar-underline":"#4a46c8","--color-body":"#f8f8fb","--color-box-background":"#fff","--color-box-background-alt":"#fcfcfd","--color-box-over-box-background":"#fff","--color-box-over-box-light-background":"#fff","--color-box-highlight-background":"#f7f7fb","--color-box-hover-background":"#f2f2f9","--color-box-shadow":"0
          0 40px 0 rgba(94,92,154, .06)","--color-overbox-shadow":"3px 5px 20px 0
          rgba(94,92,154, .12)","--color-overbox-dark-shadow":"0 0 40px 0
          rgba(94,92,154, .12)","--color-overbox-big-shadow":"3px 5px 40px 0
          rgba(94,92,154,
          .1)","--color-text":"#3e3f5e","--color-text-alt":"#8f91ac","--color-text-alt-2":"#adafca","--color-icon":"#adafca","--color-icon-highlighted":"#3e3f5e","--color-border":"#dedeea","--color-divider":"#eaeaf5","--color-progressbar-line-gradient-start":"#615dfa","--color-progressbar-line-gradient-end":"#41efff","--color-progressbar-underline":"#e7e8ee","--color-avatar-rank-hexagon":"#45437f","--color-primary":"#23d2e2","--color-primary-hover":"#1bc5d4","--color-primary-light":"#41efff","--color-primary-dark":"#00c7d9","--color-primary-shadow":"4px
          7px 12px 0 rgba(35,210,226,
          .2)","--color-secondary":"#615dfa","--color-secondary-hover":"#5753e4","--color-secondary-dark":"#45437f","--color-secondary-shadow":"4px
          7px 12px 0 rgba(97,93,250,
          .2)","--color-tertiary":"#fd4350","--color-tertiary-hover":"#dd343f","--color-tertiary-shadow":"4px
          7px 12px 0 rgba(253,67,80,
          .2)","--color-loading-screen-background":"#3e3f5e","--color-loading-bar-1":"#615dfa","--color-loading-bar-2":"#5d71fb","--color-loading-bar-3":"#5983fb","--color-loading-bar-4":"#549afc","--color-loading-bar-5":"#4eb2fd","--color-loading-bar-6":"#49c9fe","--color-loading-bar-7":"#45ddfe","--color-loading-bar-8":"#41efff","--color-overlay":"#15151f"
          {"}"},"settings":{"{"}
          "users_can_register":false,"posts_per_page":"6","current_user_is_admin":false,"membership_levels_page_link":"https:\/\/odindesignthemes.com\/vikinger-theme\/membership-account\/membership-levels\/","sidemenu_status":"display","sidemenu_active":false,"search_status":"display","search_blog_enabled":true,"search_members_enabled":true,"search_groups_enabled":true,"post_types_to_display_in_search":["post"],"post_type_filter_display_is_enabled":false,"post_type_split_display_is_enabled":false,"post_excerpt_display_is_enabled":false,"newsfeed_yt_playback_limit":"yes","stream_twitch_embeds_parent":"odindesignthemes.com","activity_show_more_status":"enabled","activity_show_more_height":1000,"activity_character_limit":1000,"activity_comment_character_limit":500,"activity_edit_time_limit":5,"activity_line_break_limit":2,"media_photo_upload_enabled":true,"media_photo_upload_maximum_size":512,"media_photo_allowed_extensions":["jpg","jpeg","png","gif"],"media_photo_allowed_extensions_case_sensitive":true,"media_video_upload_enabled":true,"media_video_upload_maximum_size":512,"media_video_allowed_extensions":["mp4","mkv"],"media_video_allowed_extensions_case_sensitive":true,"avatar_type":"hexagon","member_avatar_url_default":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-content\/themes\/vikinger\/img\/avatar\/default-avatar.jpg","group_avatar_url_default":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-content\/themes\/vikinger\/img\/avatar\/default-avatar.jpg","member_cover_image_url_default":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-content\/themes\/vikinger\/img\/cover\/default-cover.png","group_cover_image_url_default":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-content\/themes\/vikinger\/img\/cover\/default-cover.png","footer_status":"display","bp_restrict_group_creation":false,"bbp_is_group_forums_active":true,"bp_verified_member_badge":"&lt;span
          class=\"bp-verified-badge\"&gt;&lt;\/span&gt;","bp_verified_member_display_badge_in_profile_username":false,"bp_verified_member_display_badge_in_profile_fullname":true,"bp_verified_member_display_badge_in_activity_stream":true,"bp_verified_member_display_badge_in_members_lists":true,"bp_verified_member_display_badge_in_bbp_topics":true,"bp_verified_member_display_badge_in_bbp_replies":true,"bp_verified_member_display_badge_in_/theme/wp_comments":true,"bp_verified_member_display_badge_in_/theme/wp_posts":true,"pmpro_bp_options":
          {"{"}
          "pmpro_bp_restrictions":1,"pmpro_bp_group_creation":0,"pmpro_bp_group_single_viewing":0,"pmpro_bp_groups_page_viewing":0,"pmpro_bp_groups_join":0,"pmpro_bp_private_messaging":0,"pmpro_bp_public_messaging":0,"pmpro_bp_send_friend_request":0,"pmpro_bp_member_directory":0,"pmpro_bp_group_automatic_add":[],"pmpro_bp_group_can_request_invite":[],"pmpro_bp_member_types":[]
          {"}"},"pmpro_bp_membership_level_tag_display_on_profile_is_enabled":true
          {"}"}
          {"}"}; var vikinger_translation = {"{"}
          "activate":"Activate!","activating":"Activating...","activation_form_wrong_pc_or_token_error":"Wrong
          Purchase Code or Access
          Token.","required_plugins_install_button_text":"Install \/ Update \/
          Activate
          Plugins","processing":"Processing...","day":"Day","month":"Month","year":"Year","members_only_content_text":"This
          content is for members only.","join_now":"Join
          Now","search_placeholder":"Enter your search
          here...","members":"Members","no_members_found":"No members
          found","groups":"Groups","no_groups_found":"No groups
          found","posts":"Posts","by":"By","friend_requests":"Friend
          Requests","received":"Received","sent":"Sent","no_friend_requests_received":"No
          friend requests received","no_friend_requests_sent":"No friend requests
          sent","view_all_friend_requests":"View all Friend
          Requests","messages":"Messages","no_messages_received":"No messages
          received","view_all_messages":"View all Messages","email_settings":"Email
          Settings","notifications":"Notifications","no_notifications_received":"No
          notifications received","view_all_notifications":"View all
          Notifications","no_results_found":"No results
          found","item_list_no_results_text":"Please try with another
          filter!","showing_results_text_1":"Showing","showing_results_text_2":"out
          of","category":"Category","all_categories":"All
          Categories","type":"Type","all":"All","filter_by":"Filter
          By","date":"Date","popularity":"Popularity","order_by":"Order
          By","ascending":"Ascending","descending":"Descending","filter_action":"Filter","result":"Result","results":"Results","grid_filter":
          {"{"}"big":"Big Grid","small":"Small Grid","list":"List Grid"{"}"}
          ,"read_more":"Read
          More...","comment":"Comment","comments":"Comments","share":"Share","shares":"Shares","more_reactions_text_1":"and","more_reactions_text_2":"more...","newest":"Newest","popular":"Popular","active":"Active","no_photos_found":"No
          photos found","friends":"Friends","no_friends_found":"No friends
          found","find_friends":"Find Friends","see_all_friends":"See all
          Friends","locked":"Locked","unlocked!":"Unlocked!","status_update":"Status
          Update","post_in":"Post In","my_profile":"My
          Profile","privacy":"Privacy","public":"Public","private":"Private","activity_form_placeholder_1":"Hi","activity_form_placeholder_2":"Write
          something here, use @ to mention someone...","add_photo":"Add
          Photo","add_video":"Add Video","add_gif":"Add Gif","upload_photo":"Upload
          Photo","discard":"Discard","save":"Save","post_action":"Post","activity_form_empty_error":"Please
          enter some text or add a photo or
          video!","upload_form_photo_empty_error":"Please add a photo to
          upload!","upload_form_video_empty_error":"Please add a video to
          upload!","maximum_size_accepted_is":"Maximum size accepted
          is","size_is_too_big":"size is too
          big!","file_extension_is_not_allowed":"file extension is not
          allowed!","all_updates":"All
          Updates","mentions":"Mentions","favorites":"Favorites","scope":"Scope","show":"Show","everything":"Everything","status":"Status","media":"Media","photos":"Photos","videos":"Videos","friendships":"Friendships","new_groups":"New
          Groups","add_favorite":"Add Favorite","remove_favorite":"Remove
          Favorite","pin_to_top":"Pin to Top","unpin_from_top":"Unpin from
          Top","edit_post":"Edit Post","delete_post":"Delete
          Post","delete_activity_message_title":"Delete
          Post","delete_activity_message_text":"Are you sure you want to delete this
          post?","edit_comment":"Edit Comment","cancel_edit":"Cancel
          Edit","delete_comment":"Delete
          Comment","delete_comment_message_title":"Delete
          Comment","delete_comment_message_text":"Are you sure you want to delete this
          comment?","edited_by":"* edited by","and":"and","in_the_group":"in the
          group","shared_content_deleted_title":"Oops!
          -","shared_content_deleted_text":"the shared content was
          deleted.","show_more":"Show
          More","react":"React!","comment_action":"Comment","share_action":"Share","leave_a_comment":"Leave
          a Comment","your_reply":"Your Reply","post_reply":"Post
          Reply","reply_action":"Reply","cancel_action":"Cancel","load":"Load","reply":"Reply","replies":"Replies","load_more_comments":"Load
          More Comments","comment_empty_message":"Please enter a
          comment","comment_not_approved_message":"Your comment is awaiting moderation
          and will be visible when approved","search_groups":"Search
          Groups","alphabetical":"Alphabetical","newest_groups":"Newest
          Groups","recently_active":"Recently
          Active","group":"Group","member":"Member","post":"Post","banned":"Banned","accept":"Accept","cancel":"Cancel","continue":"Continue","join_group":"Join
          Group","leave_group":"Leave Group","send_join_request":"Send Join
          Request","cancel_join_request":"Cancel Join
          Request","reject_join_request":"Reject Join
          Request","accept_join_request":"Accept Join Request","remove_member":"Remove
          Member","remove_invitation":"Remove Invitation","reject_invitation":"Reject
          Invitation","accept_invitation":"Accept Invitation","ban_member":"Ban
          Member","unban_member":"Unban Member","promote_to_admin":"Promote to
          Admin","promote_to_mod":"Promote to Mod","demote_to_mod":"Demote to
          Mod","demote_to_member":"Demote to Member","manage_groups":"Manage
          Groups","search_members":"Search Members","newest_members":"Newest
          Members","friend":"Friend","no_social_networks_linked":"No social networks
          linked","no_badges_unlocked":"No badges unlocked","add_friend":"Add
          Friend","remove_friend":"Remove Friend","accept_friend":"Accept Friend
          Request","reject_friend":"Reject Friend Request","withdraw_friend":"Cancel
          Friend Request","send_message":"Send
          Message","browse":"Browse","photos_no_results_title":"No photos
          found","photos_no_results_text":"There aren't any uploaded
          photos!","videos_no_results_title":"No videos
          found","videos_no_results_text":"There aren't any uploaded
          videos!","upload_photos":"Upload Photos","upload_video":"Upload
          Video","select_all":"Select All","unselect_all":"Unselect
          All","delete":"Delete","save_changes":"Save
          Changes","saving":"Saving...","profile_info":"Profile
          Info","change_avatar":"Change Avatar","change_cover":"Change
          Cover","upload_error":"Upload Error","upload_error_message":"An error has
          ocurred, please verify avatar\/cover dimensions or try again
          later","avatar_upload_error":"Avatar Upload
          Error","cover_upload_error":"Cover Upload Error","select_an_option":"Select
          an Option","social_networks":"Social
          Networks","no_social_info_available":"No social info
          available","stream":"Stream","stream_settings_username_title":"Twitch
          Streamer - Username","stream_settings_username_placeholder":"Enter Twitch
          streamer username here...","stream_settings_preview_title":"Twitch Stream -
          Preview","stream_settings_preview_text":"Below, you can see a preview of how
          the Twitch stream will look like with the currently entered streamer
          username","stream_settings_preview_no_results":"No streamer username
          entered","notifications_received_no_results_title":"No notifications
          received","notifications_received_no_results_text":"If you receive
          notifications they will appear here!","mark_as_read":"Mark as
          Read","delete_selected_message":"Are you sure you want to delete all
          selected
          items?","inbox":"Inbox","sentbox":"Sentbox","starred":"Starred","new_message":"New
          Message","started":"Started","add_friend_placeholder":"Use @ to add a
          friend...","search_messages":"Search Messages","write_a_message":"Write a
          Message...","no_messages_found":"No messages
          found","message_search_no_results":"No messages match your
          search","star_action":"Star","unstar":"Unstar","delete_item_message":"Are
          you sure you want to delete
          this?","you":"You","friend_requests_received":"Friend Requests
          Received","friend_requests_received_no_results_title":"No friend requests
          received","friend_requests_received_no_results_text":"If you receive friend
          requests they will appear here!","friend_requests_sent":"Friend Requests
          Sent","friend_requests_sent_no_results_title":"No friend requests
          sent","friend_requests_sent_no_results_text":"If you send friend requests
          they will appear here!","account":"Account","account_info":"Account
          Info","no_account_info_available":"No account info
          available","change_password":"Change
          Password","enter_your_current_password":"Enter your Current
          Password","your_new_password":"Your New
          Password","confirm_new_password":"Confirm New
          Password","error":"Error","change_password_error_title":"Change Password
          Error","change_password_error_text":"Couldn't change password. Please try
          again later","current_password_mismatch_error_title":"Incorrect
          Password","current_password_mismatch_error_text":"Entered current password
          doesn't match your password. Please make sure to enter your current password
          correctly","new_password_mismatch_error_title":"New Password
          Mismatch","new_password_mismatch_error_text":"New password field and new
          password confirmation field don't match. Please make sure to enter the same
          password in both
          fields","activity":"Activity","email_settings_mentions_description":"A
          member mentions you in an update","email_settings_replies_description":"A
          member replies to an update or comment you've
          posted","email_settings_newmessage_description":"A member sends you a new
          message","new_friend_request":"New Friend
          Request","email_settings_newfriendrequest_description":"A member sends you a
          friendship request","friend_request_accepted":"Friend Request
          Accepted","email_settings_friendrequestaccepted_description":"A member
          accepts your friendship request","group_invite":"Group
          Invite","email_settings_groupinvite_description":"A member invites you to
          join a group","group_update":"Group
          Update","email_settings_groupupdate_description":"Group information is
          updated","group_promotion":"Group
          Promotion","email_settings_grouppromotion_description":"You are promoted to
          a group administrator or
          moderator","private_group_membership_request":"Private Group Membership
          Request","email_settings_privategroupmembershiprequest_description":"A
          member requests to join a private group for which you are an
          admin","group_join_request_status":"Group Join Request
          Status","email_settings_groupjoinrequeststatus_description":"Your request to
          join a group has been approved or denied","manage_group":"Manage
          Group","cant_manage_groups_message":"You can't manage any groups
          yet!","create_group":"Create Group!","create_new_group":"Create New
          Group","create_new_group_text":"Share your passion with
          others!","start_creating":"Start
          Creating!","creating":"Creating...","group_creator":"Group
          Creator","group_admin":"Group Admin","group_mod":"Group
          Mod","group_info":"Group Info","group_name":"Group
          Name","group_status":"Group Status","group_slug":"Group Slug (what you see
          on the URL)","group_description":"Group
          Description","forum":"Forum","forums":"Forums","forum_topics":"Forum
          Topics","forum_replies":"Forum Replies","group_forum":"Group
          Forum","group_forum_enable_title":"Should this group have a
          forum?","group_forum_enable_text":"Enable forum for this
          group","forum_name":"Forum Name","forum_description":"Forum
          Description","forum_privacy":"Forum Privacy","avatar_and_cover":"Avatar and
          Cover","administrators":"Administrators","mods":"Mods","banned_members":"Banned
          Members","no_mods_found":"No mods found","no_banned_members_found":"No
          banned members found","delete_group":"Delete
          Group","delete_group_text":"Deleting a group will remove all its content,
          this action cannot be undone.","delete_group_confirmation":"Are you sure you
          want to delete this group?","required_fields_message":"Please fill all
          required fields","save_error_message":"Error when saving, please try again
          later","discard_all":"Discard All","send_invitations":"Send
          Invitations","send_invitations_no_results_title":"No
          groups","send_invitations_no_results_text_1":"You don't belong to any
          groups. Create or join a group
          first!","send_invitations_no_results_text_2":"You don't belong to any groups
          which you can send invitations from","select_the_group":"Select the
          Group","select_your_friends":"Select your
          Friends","send_invitations_friends_no_results":"You don't have any friends
          that can be invited to this
          group","sending":"Sending...","pending_invitations":"Pending
          Invitations","pending_invitations_no_results_title":"No invitations
          sent","pending_invitations_no_results_text":"If you send invitations they
          will appear here!","received_invitations":"Received
          Invitations","received_invitations_no_results_title":"No invitations
          received","received_invitations_no_results_text":"If you receive invitations
          they will appear here!","invited_by":"Invited
          By","received_membership_requests":"Received Membership
          Requests","received_membership_requests_no_results_title":"No membership
          requests received","received_membership_requests_no_results_text":"If you
          receive membership requests they will appear
          here!","sent_membership_requests":"Sent Membership
          Requests","sent_membership_requests_no_results_title":"No membership
          requests sent","sent_membership_requests_no_results_text":"If you send
          membership requests they will appear here!","wants_to_join":"Wants to
          Join","register":"Register","login":"Login","login_and_register":"Login
          &amp; Register","account_login":"Account
          Login","username_or_email":"Username or
          Email","password":"Password","remember_me":"Remember
          Me","login_to_your_account":"Login to your
          Account","authenticating":"Authenticating...","wrong_user_message":"Wrong
          username or password.","generic_error":"An error has ocurred. Please try
          again later.","create_your_account":"Create your
          Account!","your_email":"Your
          Email","username":"Username","repeat_password":"Repeat
          Password","register_now":"Register
          Now!","registering":"Registering...","registration_complete":"Registration
          Complete!","invalid_email_message":"Email entered is
          invalid","password_mismatch_message":"Passwords don't match, please enter
          the same password in both fields","username_exists_message":"Username
          already exists!, please select another one"{"}"}; /* ]]&gt; */
        </Script>
        <Script
          src="/theme/wp-content/themes/vikinger/js/app.bundle.min9086.js?ver=3.9.0"
          strategy="lazyOnload"
          id="vikinger-main-Scripts-js"
        />
        <Script src="/theme/wp-includes/js//theme/wp-embed.min080f.js?ver=5.8.2" strategy="lazyOnload" id="/theme/wp-embed-js" />
        <Script
          src="/theme/wp-content/plugins/elementor/assets/js/webpack.runtime.min9d52.js?ver=3.5.1"
          strategy="lazyOnload"
          id="elementor-webpack-runtime-js"
        />
        <Script
          src="/theme/wp-content/plugins/elementor/assets/js/frontend-modules.min9d52.js?ver=3.5.1"
          strategy="lazyOnload"
          id="elementor-frontend-modules-js"
        />
        <Script
          src="/theme/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min05da.js?ver=4.0.2"
          strategy="lazyOnload"
          id="elementor-waypoints-js"
        />
        <Script
          src="/theme/wp-includes/js/jquery/ui/core.min35d0.js?ver=1.12.1"
          strategy="lazyOnload"
          id="jquery-ui-core-js"
        />
        <Script
          src="/theme/wp-content/plugins/elementor/assets/lib/swiper/swiper.min48f5.js?ver=5.3.6"
          strategy="lazyOnload"
          id="swiper-js"
        />
        <Script
          src="/theme/wp-content/plugins/elementor/assets/lib/share-link/share-link.min9d52.js?ver=3.5.1"
          strategy="lazyOnload"
          id="share-link-js"
        />
        <Script
          src="/theme/wp-content/plugins/elementor/assets/lib/dialog/dialog.mind227.js?ver=4.9.0"
          strategy="lazyOnload"
          id="elementor-dialog-js"
        />
        <Script id="elementor-frontend-js-before">
          var elementorFrontendConfig = {"{"}"environmentMode":{"{"}
          "edit":false,"/theme/wpPreview":false,"isscriptDebug":false{"}"},"i18n":{"{"}
          "shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on
          Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download
          image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play
          Video","previous":"Previous","next":"Next","close":"Close"{"}"}
          ,"is_rtl":false,"breakpoints":{"{"}
          "xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600{"}"},"responsive":
          {"{"}"breakpoints":{"{"}"mobile":{"{"}
          "label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true
          {"}"},"mobile_extra":{"{"}"label":"Mobile
          Extra","value":880,"default_value":880,"direction":"max","is_enabled":false
          {"}"},"tablet":{"{"}
          "label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true
          {"}"},"tablet_extra":{"{"}"label":"Tablet
          Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false
          {"}"},"laptop":{"{"}
          "label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false
          {"}"},"widescreen":{"{"}
          "label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false
          {"}"}
          {"}"}
          {"}"},"version":"3.5.1","is_static":false,"experimentalFeatures":{"{"}
          "e_import_export":true,"e_hidden_wordpress_widgets":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true
          {"}"},"urls":{"{"}
          "assets":"https:\/\/odindesignthemes.com\/vikinger-theme\//theme/wp-content\/plugins\/elementor\/assets\/"
          {"}"},"settings":{"{"}"page":[],"editorPreferences":[]{"}"},"kit":{"{"}
          "active_breakpoints":["vie/theme/wport_mobile","vie/theme/wport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_deScription_src":"deScription"
          {"}"},"post":{"{"}
          "id":876,"title":"Vikinger%20%E2%80%93%20BuddyPress%20Social%20Community","excerpt":"","featuredImage":false
          {"}"}
          {"}"};
        </Script>
        <Script
          src="/theme/wp-content/plugins/elementor/assets/js/frontend.min9d52.js?ver=3.5.1"
          strategy="lazyOnload"
          id="elementor-frontend-js"
        />
        <Script
          src="/theme/wp-content/plugins/elementor/assets/js/preloaded-modules.min9d52.js?ver=3.5.1"
          strategy="lazyOnload"
          id="preloaded-modules-js"
        />
      </>);
}