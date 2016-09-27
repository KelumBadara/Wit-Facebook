'use strict';

// Wit.ai parameters
const WIT_TOKEN = "5ELFCLMXPUGNTO2XTP3ZZFCOJVYTXQLA";

if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN ="EAARZAs095ZCLMBAOUwR9ZChlOUQhyEPnU4HAh2VhoiF3h4uxXwKZCFnuuzOG0rb9ufmlgHvYB5uA7ZCzikBq8LX4hWZBc7qCoy6wIHwA5j0oMIhegYnb7e53IN1RLXWNifyiE9iHRJOxxaHRMx6FAjo9ML8klnt9fZCjkhNMZC0HngZDZD";

var FB_VERIFY_TOKEN = "just_do_it";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};
