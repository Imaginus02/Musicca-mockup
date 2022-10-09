# Frontend Web Development - Responsive Web Development

Quentin Richaud

qrichaud.pro@gmail.com

---

Since the 2010s', we need to account for different kind of devices accessing our content : smartphones, tablets and laptops.

Difference between those devices :

- Screen size (obviously)
- Screen ratio (landscape vs. portrait)
- Different mean of input (mouse vs touchscreen, physical vs virtual keyboard, clicks vs. gestures).

---

Responsive design is the art of making a ressource suited for all kind of device accessing it.

Examples of not responsive designs :

- badly designed for smartphones : https://old.reddit.com/
- badly designed for laptops (unfortunately a rising trend) : https://dnevozhai.com/

When doing responsive design, there are 2 approaches :

- mobile first
- desktop first

Example of good mobile first : https://www.apple.com/


The problem of responsive design is at first a problem of UX design (so not really your job as a developper, although
having a good grasp of UX is a plus).

The main constraints of a website designed for a good smartphone accessibility :
- The screen is small. How to display efficiently all your data while keeping it readable.
- The pointer method (fingers) is not accurate. You can't have small links or buttons.



We can't really make a website that looks good both on desktop and smartphone. We need to have a design that will adapt on
the screen size, with elements positionned differently, menus becoming hidden by default and expanded with a button, etc.

There are 2 strategies :

- Having 2 separate websites, one for mobile, one for desktop, and having the server smartly serving the one or the other 
  depending on the kind of client making the request. This more of a backend solution.
- Having only one adaptive website, which will have elements displaying differently in the web browser depending on the 
  client properties. This is more of a frontend solution.

Example of 2 coexisting websites : wikipedia


The advantages of a website designed for mobile vs. a native mobile application :
- more portable, no installation required, easy to update
- cons : slower, don't have access to native OS APIs


What tools we have in frontend development :
- Think ahead of your CSS rules to work for different screen size (sizes in percentage, min/max widths on element,
text wrapping, overflowing…)
- CSS media queries, to apply different styles depending on the screen size
- Flexbox, in order to adjust the order, flow, direction of elements 

Web developper tools for responsive development

Bonus : think also of the network aspect of things, and web developper tools for simulating a slow bandwidth

Presenting media queries

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

media types are screen, print and all. We are only going to use screen

```css
@media screen and (max-width: 400px) {
  body {
    color: blue;
  }
}
```
For a screen smaller than 400px


```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}

```
Example of another kind of media query selector


```css
@media (min-width: 400px) and (max-width: 1024px) {
  /* CSS rules go here */
}
```
Select a medium sized screen by combining two rules (usually a tablet)

# The viewport meta tag

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```


This is the viewport meta tag — it exists as a way to control how mobile browsers render content. This is needed because by default, most mobile browsers lie about their viewport width. Non-responsive sites commonly look really bad when rendered in a narrow viewport, so mobile browsers usually render the site with a viewport width wider than the real device width by default (usually 980 pixels), and then shrink the rendered result so that it fits in the display.

This is all well and good, but it means that responsive sites are not going to work as expected. If the viewport width is reported as 980 pixels, then mobile layouts (for example created using a media query of @media screen and (max-width: 600px) { }) are not going to render as expected.

To remedy this, including a viewport meta tag like the one above on your page tells the browser "don't render the content with a 980 pixel viewport — render it using the real device width instead, and set a default initial scale level for better consistency." The media queries will then kick in as expected.





Defining screen sizes for which you want different CSS rules

SCSS to make media queries easier

Demo :

1 : max-width & width as a percentage of the view
2 : item flows with flex 
  2.1  : menu elemnts
  2.2 : cards
3 : media queries
  3.1 : changing margins, padding, font size
  3.2 : changing flex direction (horizontal to vertical)
  3.3 : making a mobile menu vs. desktop menu