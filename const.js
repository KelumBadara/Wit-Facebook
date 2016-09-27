'use strict';

// Wit.ai parameters
const WIT_TOKEN = "5ELFCLMXPUGNTO2XTP3ZZFCOJVYTXQLA";

if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN ="EAARZAs095ZCLMBADcKyVpSuEFwRuFpFzMVNZA15qQUVabCsUGJnrYxeC9ab8BFpJh1oBiZCtaslX7NpHE4IuqeHvAqB5FZC0egDXej6vc6iI9VrE3jbeHZCa9ZAYhV3BsKJRgCqWPIrZCVGoJgRXaFJqzmHF249EjqxrIELaqaSHjAZDZD";

var FB_VERIFY_TOKEN = "just_do_it";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};
