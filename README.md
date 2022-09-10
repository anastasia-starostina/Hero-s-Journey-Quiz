# Hero's Journey Personality Quiz

We were inspired by Joseph Campbell's framework of the Hero's Journey & the 16 Personalities UI to make a personality quiz with this theme. We saw this project as an opportunity to learn and experiment with new technology and challenged ourselves to explore Next JS and CSS Tailwind.

 <img src="./heros_journey.png" width="400px"/> 
 
<em> Illustration of the Hero's Journey framework</em>

In narratology and comparative mythology, the hero's journey, or the monomyth, is the common template of stories that involve a hero who goes on an adventure, endures a decisive crisis, and comes home changed or transformed. A hero, according to Joseph Campbell, <em>“is someone who has given his or her life to something bigger than oneself.”</em>

## Authors

- [Afam Okoh](https://www.github.com/afam-io)
- [Anastasia Starostina](https://www.github.com/anastasia-starostina)
- [Simran Rai](https://www.github.com/srai98i)


## Installation

Install with npm

```bash
  git clone https://github.com/srai98i/personality-quiz.git
  cd quiz-app
```
    
## Deployed Link

Visit our deployed version here: https://personality-quiz.vercel.app/


## Functionality

- Algorithm to calculate personalised answer based on user inputs
- Description of user's current stage on the Hero's Journey



## Project Management

- We used Trello to structure our ticket backlog, moving tickets from 'In Progress' to 'Done', adjusting the size of the tickets along the way.
- We also used Trello to record details from our standups and retrospective. 
- Standups occurred before each session started to define what the plan for the day was, what we hoped to achieve and potential challenges we could face.
- Each session ended with a retrospective, detailing what went well, what didn't go to plan and what we could do to improve the next session.
- We implemented a strategy of rotating scrum masters so everyone had experience with leading the team.
- We mob programmed to come up with solutions to difficult problems together.
- If anyone opened a pull request, we practiced code reviews. 
## Challenges and How We Resolved Them 

- Learning Next JS
After learning React for just two weeks, we wanted to explore different frameworks. We researched into Next JS and Gatsby but eventually decided to proceed with Next JS because we were aware of its growth in popularity in the industry and we wanted to become familiar with it. The flexibility Next JS provides in terms of rendering pages interested us and we wanted to explore that more. It was challenging learning a new framework with just basic knowledge of React but following the documentation and tutorial provided on the Next JS site helped us learn the concept of pages and pre rendering. 


- Learning CSS Tailwind (bc of lack of vanilla CSS knowledge) (converting vanilla CSS to tailwind)
Since we used Next JS, we also thought it would be benefitial to use CSS Tailwind as many developers recommend using them together. The main challenges we faced were:
1. Knowing exactly what CSS we wanted to apply 
2. Converting vanilla CSS syntax into Tailwind style props 
3. Getting used to inline styling

We overcame this challenge by relying on the CSS Tailwind docs and the table of style props provided by Tailwind. We also used this opportunity to improve our basic CSS knowledge and we now feel more confident styling pages from this experience. 

- Building forms
Instead of using a UI library to build the form, we challenged ourselves to build a form from scratch. This was a challenge that required us to refer back to HTML attributes. After mob programming and knowledge exchange, we eventually built the form. We learnt that it is more complicated than we initially thought and appreciated the help and ease that a UI library provides in this case. 

- Making our own algorithm to determine value of answers user provides
There were a lot of ways to calculate a final answer from the inputs provided by the user. After discussing and planning the logic, we used the .reduce() method to find the most occuring answer. 


## References

[The Hero with A Thousand Faces (The Collected Works of Joseph Campbell)](https://www.amazon.co.uk/Thousand-Faces-Collected-Joseph-Campbell/dp/1577315936/ref=pd_lpo_1?pd_rd_i=1577315936&psc=1)

[THE MONOMYTH (THE HERO'S JOURNEY)](https://libguides.gvsu.edu/c.php?g=948085&p=6857311)

[Tailwind CSS](https://tailwindcss.com/)

[Next JS Documentation](https://nextjs.org/docs)




