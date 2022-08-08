<script lang="ts">
	import MessageView from "./Message.svelte";
	import { tick, onMount } from "svelte";
	import type {Message} from "../../utils/types/message";

	let message: string;
	let messages: Message[] = [];
	let messageContainerRef: HTMLElement;
	let inputRef: HTMLElement;
    let isVisible = true;

	const handleKeydown =(event: KeyboardEvent) => {
	  if (event.key === "Enter") {
	    handleSend();
	  }
	}

	const startChatbot = async () => {
		const res = await fetch('/api/chatbot/headings', {
			method: 'GET',
        });
		if (res.ok) {
			const resp = await res.json();
			const response: Message = {...resp, sender: "SmartBot"};
			messages = [...messages, response];
			scrollToEnd();
		}
	}

	const pushMessage = async (str: string) => {
		const message: Message = { text: str, sender: "user"};
		messages = [...messages, message];
		const res = await fetch('/api/chatbot/message', {
			method: 'POST',
			body: JSON.stringify(message),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (res.ok) {
			const resp = await res.json();
			const response: Message = {...resp, sender: "SmartBot"};
			messages = [...messages, response];
		}
	}

	const scrollToEnd = () => {
	  if (messageContainerRef) {
	    messageContainerRef.scrollTop = messageContainerRef.scrollHeight;
	  }
	}

	const handleSend = async() => {
	  if (message.trimStart()) {
	    await pushMessage(message.trimStart());
	    message = "";
	    await tick();
	    scrollToEnd();
	  }
	}

	const headingClickCb = (e: MouseEvent) => {
		if (e.target && (e.target as HTMLElement).innerText === messages.at(0).headings.at(-1) && inputRef) {
			inputRef.focus();
		}
	}

	onMount(startChatbot);
</script>

<div class="w-96 rounded border border-radius flex flex-col justify-between shadow-xl" class:h-96={isVisible}>
    <div on:click={() => isVisible = !isVisible} class="rounded chat-header border-b px-4 py-1 flex justify-between">
        <span>SmartBot</span>
        <span class="text-xl align-center cursor-pointer alert-del">&times;</span>
    </div>
    {#if isVisible}
        <div bind:this={messageContainerRef} class="flex-grow overflow-auto w-full h-full py-1">
            <div style="min-height: 100%;" class="w-full chat-messages overflow-auto flex flex-col justify-end">
                {#each messages as message}
                    <MessageView {message} headingClickCb={headingClickCb} />
                {/each}
            </div>
        </div>
        <div class="chat-input h-8 flex mb-2">
            <span class="flex-grow mx-1">
                <input placeholder="type..." bind:this={inputRef} on:keydown={handleKeydown} bind:value={message} class="border rounded-lg px-2 w-full h-full"/>
            </span>
            <button on:click={handleSend} class="rounded-lg border flex px-3 items-center mx-1 justify-center">
                <span>send<span>
            <button>
        </div>
    {/if}
</div>