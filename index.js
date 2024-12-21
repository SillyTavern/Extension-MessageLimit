let limit = 4;

globalThis.MessageLimit_interceptGeneration = function(chat) {
    while (chat.length > limit) {
        chat.shift();
    }
}
