# Message Limit

Limit the maximum number of visible chat messages to be sent per prompt. Does not include example messages, in-chat injections, etc.

## How to use

1. Install the extension via the URL: `https://github.com/SillyTavern/Extension-MessageLimit`
2. Enable the extension in the extension settings menu. Set the message limit to your desired value (default: 10).
3. If you need to apply the message limit to background/quiet prompts (e.g. extensions, slash commands, etc.), enable the "Apply to background prompts" setting.

## Slash Commands

### `/ml-state`

Enable or disable the message limit. Just returns the current state if no arguments are provided.

```stscript
/ml-state toggle
```

```stscript
/ml-state | /echo
```

### `/ml-limit`

Set the message limit. Just returns the current limit if no arguments are provided.

```stscript
/ml-limit 5
```

```stscript
/ml-limit | /echo
```

### `/ml-quiet`

Enable or disable the message limit for background (quiet) prompts. Just returns the current state if no arguments are provided.

```stscript
// Summarize only the last 5 messages ||
/ml-state on | /ml-limit 5 | /ml-quiet on | /summarize | /ml-state off
```

## License

AGPL-3.0

