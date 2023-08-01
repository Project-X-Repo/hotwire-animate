# Hotwire Animate
Bring your Turbo Frames to life
with drop in animations.

### A wrapper to use [Animate.css](https://animate.style/) with [Hotwire](https://hotwire.dev)

## Why?
Taking the "Hotwire" approach we want to avoid writing JS whenever we can. The core goal of this project is to make it as easy as possible to sprinkle in animations whilst still supporting all [Turbo Frame events](https://turbo.hotwired.dev/reference/events).

## Installation

Install with npm:

```
npm install hotwire-animate --save
``````
or yarn
```
yarn add hotwire-animate
```
Import into application js or wherever you want:

```
import 'hotwire-animate';
```

## Usage
<b>Ensure you have Animate.css installed on your project.</b>
### Preparing your animation class
Pick an animation you want to add from [Animate.css](https://animate.style/) and copy the class name, for example `animate__bounce`.


To add it to your element you will only need `bounce` (<del>animate__</del>bounce). We automatically add `animate__` to any class.

### Adding data attributes
It's as simple as adding a data attribute to the elements you want to animate.

```
<h1 data-hw-animate="bounce">Bounce this title</h1>
```
For infinite animations use
```
<div data-hw-animate="pulse" data-hw-animate-duration="infinite">Spinner</div>
```
To animate the element when it loads on the page use `data-hw-animate-in` attribute.

For example, we want the `Comment` partial to `bounceIn` when a new comment is created.
```
# _comment.html.erb

<div id="<%= dom_id comment %>" data-hw-animate-in="bounceIn">
    <%= comment.body %>
</div>
```

Similar approach for when removing a comment, use `data-hw-animate-out` attribute.
```
# _comment.html.erb

<div id="<%= dom_id comment %>" data-hw-animate-out="bounceOut">
    <%= comment.body %>
</div>
```
Both data attributes can be used on the same element.
```
# _comment.html.erb

<div id="<%= dom_id comment %>" data-hw-animate-in="bounceIn" data-hw-animate-out="bounceOut">
    <%= comment.body %>
</div>
```


## Credits
This project was conceived during [Rails Hackathon](https://railshackathon.com/) by [Anton.Z](https://github.com/antonzaharia) and [Matt.O](https://github.com/eds123) in September 2022

This library uses the amazing animations from Animate CSS.