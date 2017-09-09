# Simply
## CSS framework

Cssimply is a really lightweight functional css framework I created to speed up developing my projects.


## How to install

To install it is really simple, just add it from your package manager of choice

```
# for npm
npm i -S cssimply

# for yarn
yarn add cssimply
```

and then import it on whatever JavaScript file you want, I suggest using a root file so every children will inherit the style from this package.

`import 'cssimply';` is all that is required, really simple.

This will import a minified `css` file with all the needed classes to jumpstart you project.


# Sections

This first implementation is divided into 4 main parts:



## Reset
contains a small reset to make all browsers output the same default style, nothing worth mentioning, the style is attached to the base html elements.



## Spacings
contains padding and margin classes, the base value is 8 and every other value used is multiplicative of this base value (or divided from this).


### variables

All variables in /spacings are values in px, multiplicative starting from 8px

- ***$spacing-1*** 8px
- ***$spacing-2*** 16px

and so on for ***4***, ***5***, ***6***, ***7***, ***10***, ***14***, special mentions:

- ***$spacing-half*** 4px
- ***$spacing-m1*** -8px
- ***$spacing-m2*** -16px
- ***$spacing-m3*** -24px


### classes

**prefixes**

- ***m--*** margin
- ***mt--*** margin-top
- ***mb--*** margin-bottom
- ***ml--*** margin-left
- ***mr--*** margin-right
- ***mv--*** margin-top margin-bottom
- ***mh--*** margin-left margin-right

paddings works the same exact way using ***p*** instead of ***m***

**suffixes**

- ***0*** 0px
- ***1*** 8px
- ***2*** 16px

You know the drill, other numbers available are ***3***, ***4***, ***5***, ***6***, ***7***, ***10***, ***14***.
Other special suffixes are:

- ***half*** 4px
- ***m1***, ***m2***, ***m3*** are also available for -8px, -16px and -24px

```
// example
<h1 class="p--1 mv--3 pb--half">Hello world!</h1>
```
this will apply this style to the component:
```
padding: 8px;
margin-top: 24px;
margin-bottom: 24x;
padding-bottom: 4px;
```



## Colors

Colors come from https://flatuicolors.com/ there isn't much to say for now.


### variables

varibale names are the same on the website lowercase and `lisp-case`.

- ***$peter-river*** #3498db

you can imagine the rest, special mention ***$black*** and ***$white***, try to guess these too.


### classes


**prefixes**

only 3 prefixes:

- ***text--*** for color
- ***bg--*** background-color
- ***br--*** border-color


**suffixes**

simply the color variables names without the `$`.


```
// example
<h1 class="text--orange bg--emerald">Hello world!</h1>
```
this will apply this style to the component:
```
color: #f39c12;
background-color: #2ecc71;
```



## Layout

This section does not have variables, only classes

### classes

Most are self explanatory:

- ***relative*** `position: relative`
- ***absolute*** `position: absolute`
- together with ***fixed*** and ***static***

- ***hidden*** is `visibility: hidden`, DOES NOT include display: none

for display the classes start with

- ***ds--*** plus the display value, ***ds-inline-block*** adds `display: inline-block`

- ***clear***, ***pull-left***, ***pull-right*** are the same as bootstrap,
`clear: both`, `float: left`, `float: right`.

- ***br*** `border: 1px solid` apply colors with color classes
- ***rounded*** `border-radius: 4px`
- ***circle*** `border-radius: 50%`

Lastly the grid system implemented using the new CSS Grid, uses a standard 12 column layout.

- ***grid*** is the wrapper class required for using columns.
- from ***col-1*** to ***col-12*** all the column classes

```
// example
<div class="grid">
    <div class="col-6"></div>
    <div class="col-3"></div>
    <div class="col-2"></div>
    <div class="col-1"></div>
</div>
```
