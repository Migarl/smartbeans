<script lang="ts">
	import Star from './Star.svelte';
	
	let rating = null;
	let hoverRating = null;
	
	const handleHover = (id: number) => () => {
		hoverRating = id;
	}

	const handleRate = (id: number) => (event: any) => {
		if (rating && rating.toString() === event.target.dataset.starid) return;
		rating = id;
	}
	
	const stars = [
		{ id: 1, title: 'One Star' },
		{ id: 2, title: 'Two Stars' },
		{ id: 3, title: 'Three Stars' },
		{ id: 4, title: 'Four Stars' },
		{ id: 5, title: 'Five Stars' },
	]
</script>

<div> 
    <span class="flex justify-center">
        {#each stars as star}
            <Star
                title={star.title}
                filled={hoverRating ? (hoverRating >= star.id) : (rating >= star.id)} 
                starId={star.id}
                on:mouseover={handleHover(star.id)} 
                on:mouseleave={() => hoverRating = null}
                on:click={handleRate(star.id)}
            />
        {/each}
    </span>
    <br />
    <p class="flex justify-center">
        {#if rating !== null}
            Thank you for your feedback!
        {/if}
    </p>
</div>