export default function About() {
    return <>
        <h1>About Us</h1>

        <p>We're Mealer, a company dedicated to solving global hunger issues by allowing consumers to shop smartly and save money.</p>

        <p>Our meal planner and grocery list manager app allows users to plan their meals (which reduces stress) and know exactly what and how much to buy (stops overbuying and saves money).</p>

        <p><strong>Our Mission:</strong> Our mission is to help people manage their meals and groceries better, helping consumers save money and time and doing our part in solving the food shortage crisis happening around the world.</p>

        <p><strong>Our Vision:</strong> Our vision for Mealer is for it to make people's lives easier. We want Mealer to become an indispensable part of users' daily routines by providing them with convenience.</p>

        <h2>The Problem</h2>

        <p>Food waste is a huge problem, especially in developed countries like the US. Rotting food in landfills emits methane, and food waste makes up around <strong>6-8% of greenhouse gas emissions</strong>. The largest contributor to food waste is actually the consumer; consumers often buy more food than what they need and don't eat it, leaving it to rot and then throwing it away. Shoppers may also forget to buy a certain item, prompting them to make another trip to the store, which wastes gas and time.</p>

        <h2>The Solution</h2>

        <div className="my-3">
            Mealer helps to solve this issue by automatically generating a list of exactly what each person needs based on their planned recipes. Its three main features include a meal planner, custom recipes, and an automatically generated shopping list.
            <ol className="mt-2">
                <li>The meal planner allows people to schedule the meals they have, which provides peace of mind, and it also helps to prevent overbuying.</li>
                <li>Custom recipes make our app more inviting, as users can eat whatever they desire.</li>
                <li>The shopping list is automatically generated from the planned meals, providing a convenient way to save money.</li>
            </ol>
        </div>

        <h2>Business Plan</h2>

        <p>Take a look at our business plan:</p>

        <div className="position-relative h-0 rounded overflow-hidden mb-3" style={{ aspectRatio: "8.5 / 11", willChange: "transform", maxWidth: "500px" }}>
            <iframe loading="lazy" className="position-absolute w-100 h-100 top-0 bottom-0 left-0 right-0 border-0 p-0 m-0" title="Mealer Business Plan"
                src="https://www.canva.com/design/DAE7EJTz0to/view?embed" allow="fullscreen" allowFullScreen />
        </div>

        <p>Watch a video of our business presentation:</p>

        <div className="position-relative h-0 rounded overflow-hidden" style={{ aspectRatio: "16 / 9", willChange: "transform", maxWidth: "800px" }}>
            <iframe loading="lazy" className="position-absolute w-100 h-100 top-0 bottom-0 left-0 right-0 border-0 p-0 m-0" style={{ aspectRatio: "16 / 9", maxWidth: "800px" }} title="Mealer Presentation Video"
                src="https://www.youtube-nocookie.com/embed/f17d1EuJXes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
    </>;
}