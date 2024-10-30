Hi Emaily!

Mea culpa. I took a good bit longer than 2 hours on this, and it is by no means 100% complete, and I want to be upfront about why.

Two reasons, really:

1. I'm rustier with Angular than I expected. I worked with Angular for about 5 years straight, but that was about 3 years ago. A lot of it was like riding a bike, but a bike that you forgot where the pedals were. Once you find them, you're off and running but sometimes you're how to ask, "where were the pedals again"? (in fairness to me, Angular puts pedals in really weird places sometimes) In retrospect, I should have done a crash course or tutorial first to refresh my memory before diving in.

2. It's pretty hard to shift out of "enterprise" mode after a decade plus - a lot of this is decidedly overengineered for the purpose. I would have seen that better had I came at it the way I actually do at work - detailing requirements, breaking down the features, and estimating effort. Finally, some of this was just fun to get back into (I miss observables *so much*!) so it was easy to get side tracked.

Okay, that's out of the way, here's the state of things:
* App runs, no errors.
* Homepage shows a list of choruses fetched async from the local server
* Search will filter the list by chorus name
* Clicking on any chorus shows chorus details
* Login takes you to login screen
* You can log in as user:pw or admin:pw1
* If logged in as admin, the details page will show Edit and Delete links
* Delete takes you to a confirmation page

Here's what doesn't work:
* Styling on everything past the chorus list page is pretty rough
* Delete doesn't actually work - something weird with the router not getting the URL param?
* Edit is pretty much just a placeholder

So thank you for your time, I hope you find this at least illuminating. I'm pretty proud of what was actually finished, and reasonably pleased with how much I got done once I got over the initial rustiness.

Any questions please contact me, drew@adbenson.net
