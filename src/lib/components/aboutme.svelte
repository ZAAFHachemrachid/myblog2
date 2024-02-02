<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Profile from './teste/profile.svelte';
</script>

<div class="w-full md:w-[640px] mx-auto">
	<Accordion autocollapse class=" variant-ringed-warning">
		<AccordionItem open>
			<svelte:fragment slot="summary"><p>know me better</p></svelte:fragment>
			<svelte:fragment slot="content"
				><p>
					hello my name is zaaf hachem rachid ,I want to be full stack dev but still hopping bitwen
					technologies matter fact this is my first web site i was leaning backend in last 3-4 month
					with axum rust ,i'm a student at the university of science and technology of algiers love
					to learn new technologies and i'm a big fan of rust
				</p></svelte:fragment
			>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="summary"><p>what i use now for programming</p></svelte:fragment>
			<svelte:fragment slot="content"
				><p>
					i'm using svelte for the front end and rust for the backend and i'm using tailwindcss for
					the styling, i used python for create a GUI with Customtkinter and C for low level
					programming like kernel for DB i'm using a rang of DB like postgresql mysql surrealdb and
					mongodb ,use some of them for my self to learn them and other for university project.
				</p></svelte:fragment
			>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="summary"><p>What i work on now</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>
					i'm working on a this web site to learn svelte and tailwindcss and to describe my self in
					this portfolio and i'm working on a project for university with a team of 6 people to
					create website still in progress
				</p>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
