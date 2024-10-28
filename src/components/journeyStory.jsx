import React from 'react';

const journeyStory = () => {
  return (
    <div className="max-w-4xl mx-auto">

      <div className="space-y-6 text-[#333]">
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#1d1d1f]">
            The Turning Point
          </h2>
          <p className="leading-relaxed">
            I faced two choices: stay in my comfort zone or leap into the unknown world of coding.I chose the leap.
            <ul className='pt-7 '>
              <h3 className="text-[#1d1d1f] font-semibold pb-2">So I made my decision.</h3>
              <ol className='pl-4 list-decimal'>
                <li>I started learning ReactJS in my free time.</li>
                <li>I immersed myself in Tailwind CSS documentation.</li>
                <li>and built small projects for client</li>
              </ol>
            </ul>
            <br /> Then came that breakthrough moment—late at night, struggling with JavaScript (you know how it is, haha😂), when suddenly everything clicked. The component worked, the animation flowed, and I knew I'd never look back.
          </p>
        </div>

        <div className="border-l-4 border-[#333] pl-6 my-8 bg-[#f0f0f069]">
          <h2 className="text-xl font-semibold mb-4 text-[#1d1d1f]">
            Where I Am Today
          </h2>
          <p className="leading-relaxed">
            Now I'm studying Développement Informatique, building with ReactJS, Tailwind CSS, and modern UI frameworks like shadcn and magicui. The debugging sessions until dawn and CSS layout struggles became exciting challenges rather than frustrations. Each working component feels like a personal victory.
          </p>
        </div>

        <div className="pt-8">
          <p className="italic text-lg">
            "Remember, every expert developer started with their first line of code. Your background isn't a detour—it's part of your unique story. Let's create something extraordinary, one line of code at a time."
          </p>
        </div>
      </div>
    </div>
  );
};

export default journeyStory;