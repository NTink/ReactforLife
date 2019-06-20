1.	How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an    opportunity to explain what you would add.
Ans. Spent around 40 mins for this coding. Would have designed in much better way by providing the map locations by pin pointing addresses in the map
2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Ans: My chosen language was Javascript - React ES6. Higher order function is one of the best and my favorite functions as it makes mapping the data very easy. 

```
restaurants.map(restaurant => {
       return (
          <div className="col-lg-12" key={restaurant.id}>
          <div className="card mb-3 shadow-sm p-3" >
              <h5 className="text-primary">{restaurant.name}</h5>
              <p>Address: {restaurant.address}, {restaurant.area}, {restaurant.postal_code} <br/>
              Price: {restaurant.price}</p>
            </div>
          </div>
        )
      })
```
3.	How would you track down a performance issue in production? Have you ever had to do this?
Ans. Mostly refactoring the exising code. Also,We have Application insights which tracks the pageload performance. Yes we mainly optimized the api calls which resolved the issues.
4.	How would you improve the API that you just used?
Ans: Would add only relevant information which is actually required
5.	Please describe yourself using JSON.
Ans: {
"Name": "Nilam",
"Lastname": "Trivedi",
"Age": 26,
"Nationality": "Indian",
"Livesin": "Edmonton,AB",
"profession": "UI/Front End developer",
"skills": "Fullstack development, with good experience in UI development",


"Passion": [
"creativity in programming",
"Teching others",
"Instituting new technologies",
],

"Interents":[
"Computing",
"Swimming",
"Reading",
"Music",
],

"Dream":[
"I can never stand still.I like to explor and experiment"
],

"Believe":[
"Failure will never overtake me if my determination to succeed is strong enough"
]
}
