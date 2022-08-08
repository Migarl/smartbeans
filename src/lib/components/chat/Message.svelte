<script lang="ts">
  import StarRating from "../star_rating/StarRating.svelte";
  import type { Message } from "../../utils/types/message";

  export let message: Message;
  export let showRating = true;
  export let headingClickCb: (e: MouseEvent)=> void = undefined;
</script>

<div class={`relative flex pb-1 px-1 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
  <div class={`relative w-5/6 px-2 break-words rounded text-sm  py-1 ${message.sender === "user" ? "bg-gray-200" : "bg-orange-200"}`}>
    {#if message.sender === "SmartBot"}
      <div class="font-bold text-gray-600">
        {message.sender}
      </div>
    {/if}
    <span>{message.text}<span>
    {#if message.headings?.length ?? false}
      {#each message.headings as heading, i}
        <details>
          <summary on:click={headingClickCb} class="bg-inherit px-5 py-3 text-lg cursor-pointer">{heading}</summary>
          {#if message.contents.length > i}
            <div class="px-5 py-3 border border-gray-300 text-sm font-light">{@html message.contents[i]}</div>
            {#if showRating}
              <div class="pt-2">
                <p class="flex justify-center">Did this information help you?</p>
                <StarRating />
              </div>
            {/if}
          {/if}
        </details>
      {/each}
    {/if}
    {#if message.closing?.length ?? false}
      <span>{message.closing}</span>
    {/if}
    <span style="font-size:10px" class="absolute mx-2 my-1 break-all text-gray-500  bottom-0 right-0">
      {new Date(message.timestamp ?? new Date()).toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric"})}
    <span>
  </div>
</div>