# Message Limit

Limit the maximum number of visible chat messages to be sent per prompt. Does not include example messages, in-chat injections, etc.

## How to use

1. Install the extension via the URL: `https://github.com/SillyTavern/Extension-MessageLimit`
2. Enable the extension in the extension settings menu. Set the message limit to your desired value (default: 10).

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

## License

AGPL-3.0

