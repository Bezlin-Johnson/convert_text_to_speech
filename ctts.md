---
name: "Convert Text To Speech"
description: "Let's build a website to convert text to speech."
author: "@bezlin6mechminerz"
---

Text to speech is used in various areas. People have different learning styles – Some people are auditory learners, some are visual learners, and some are kinesthetic learners. The website will allow people to copy their notes and paste them on the website and listen to it. This will also help in learning how to pronounce words properly. So let's create our website.

The workshop will look something like this.

<img alt="output image" src="https://cloud-6fps2m25z.vercel.app/0screenshot_2020-10-22_at_11.57.24_pm.png">

View a [live demo](https://pleasecheckthis.netlify.app)

View the [final code](https://repl.it/repls/VengefulEnchantingWorker)

This workshop will take about 20 minutes.

## Getting started

We will be using [Repl.it.](https://repl.it) It is awesome because you can code online. Just follow this link and start coding!. Your coding environment will be ready in a few seconds!

After that create a new repl and select language HTML, CSS, JS.

<img alt="repl.it image" src="https://cloud-ns067nqq8.vercel.app/0screenshot_2020-10-23_at_12.10.50_am.png">

## Let's Code!

![Coding cat](https://cloud-9jbocmbrc.vercel.app/0giphy.gif)

### Let's start with the basic HTML structure.

```html
<!doctype html>

<head>
</head>

<body>
</body>

</html>
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

We add this in-order to get a responsive website in all kind of devices.

Now let's make a div named center.

```html
<div class="center"></div>
```

Inside this, we will be making a text field to enter our text and a button to convert it from text to speech and then play it. Let's start with the text input. To add a multi-line text input, use the HTML <textarea> tag. It allows users to input text over multiple rows.

```html
<textarea
  class="inputfield"
  type="text"
  id="text-to-speech"
  placeholder="Enter text to play."
></textarea>
```

In this we are giving a name to the class and specifying which type of input it is, Here it is text. To get its value we are giving it an id name. Then we add the placeholder, the placeholder attribute specifies a short hint that describes the expected value of an input field. Now let's make the button.

```html
<button class="button" onclick="convert()">Play</button>
```

Here we named the button for adding CSS. Then we added the onclick event which will execute a function when the button is clicked. Now let's make the function.

```html
<script>
  function convert() {
    const msg = document.getElementById("text-to-speech").value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = msg;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
</script>
```

```js
const msg = document.getElementById("text-to-speech").value;
```

We given our textarea an id, this code is used to fetch the value from the text value and assign it to the 'msg' variable.

When the button is clicked this function will run 'convert()'.
We will be using the following interfaces:

SpeechSynthesis - This is the main controller interface for the speech synthesis service which controls the synthesis or creation of speech using the text provided. This interface is used to start the speech, stop the speech, pause it, and resume, along with getting the voices supported by the device.

SpeechSynthesisUtterance - This is the interface in which we create the speech or utterance using the text provided, setting a language type, volume, pitch of the voice, rate of speech, etc. Once we have created an object for this interface, we provide it to the SpeechSynthesis object's speak() method to play the speech.

window.speechSynthesis - This property of the Javascript window object is used to get the reference of the speech synthesis controller interface, on which we call the speak() method.

#### All together

```html
<!doctype html>

<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
 <div class="center">
 <textarea class="inputfield" type="text" id="text-to-speech" placeholder="Enter text to play."></textarea>
 <br />
 <button class="button" onclick="convert()">Play</button>
 <script>
 function convert() {
 const msg = document.getElementById("text-to-speech").value;
 const speech = new SpeechSynthesisUtterance();
 speech.lang = "en";
 speech.text = msg;
 speech.pitch = 1;
 window.speechSynthesis.speak(speech);
 }
 </script>
 </div>
</body>

</html>
```

### Add styling using css

Now the website will work perfectly but it is looking ugly. Let's give some colors and make it better. Here we are using inline CSS so let's start by making a style tag.

```html
<style></style>
```

We have already given class names on HTML elements now let's give styling one by one.

```css
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 200px black;
  padding: 10px;
  text-align: center;
  background-color: black;
  font-family: helvetica;
}
```

This is our div tag and we need the text box and our button in a box placed at the center of the screen. We use position absolute and we give left-50%, top-50%; and transform it to correctly align it at the center. Then we add shadow to the box, padding, etc....Then comes the input field.

```css
.inputfield {
  width: 500px;
  font-size: 18px;
  background-color: black;
  color: deeppink;
  border-width: 0px;
}

.inputfield:focus {
  outline: none;
}
```

It is a completely read and understand format. You can refer to the CSS documentation for more details [here](https://developer.mozilla.org/en-US/docs/Web/CSS). Now let's give styling for our button.

```css
.button {
  color: black;
  background-color: deeppink;
  width: 200px;
  font-size: 20px;
  border-radius: 50px;
  border-width: 0px;
  height: 40px;
}

.button:hover {
  background-color: #fff;
  color: deeppink;
}
```

### All together

```html
<style>
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 200px black;
    padding: 10px;
    text-align: center;
    background-color: black;
    font-family: helvetica;
  }

  .inputfield {
    width: 500px;
    font-size: 18px;
    background-color: black;
    color: deeppink;
    border-width: 0px;
  }

  .inputfield:focus {
    outline: none;
  }

  .button {
    color: black;
    background-color: deeppink;
    width: 200px;
    font-size: 20px;
    border-radius: 50px;
    border-width: 0px;
    height: 40px;
  }

  .button:hover {
    background-color: #fff;
    color: deeppink;
  }
</style>
```

## Final Code

```html
<!doctype html>

<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<style>
 .center {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 box-shadow: 0px 0px 200px black;
 padding: 10px;
 text-align: center;
 background-color: black;
 font-family: helvetica;
 }

 .inputfield {
 width: 500px;
 font-size: 18px;
 background-color: black;
 color: deeppink;
 border-width: 0px;
 }

 .inputfield:focus {
 outline: none;
 }

 .button {
 color: black;
 background-color: deeppink;
 width: 200px;
 font-size: 20px;
 border-radius: 50px;
 border-width: 0px;
 height: 40px;
 }

 .button:hover {
 background-color: #fff;
 color: deeppink;
 }
</style>

<body>
 <div class="center">
 <textarea class="inputfield" type="text" id="text-to-speech" placeholder="Enter text to play."></textarea>
 <br />
 <button class="button" onclick="convert()">Play</button>
 <script>
 function convert() {
 const msg = document.getElementById("text-to-speech").value;
 const speech = new SpeechSynthesisUtterance();
 speech.lang = "en";
 speech.text = msg;
 speech.pitch = 1;
 window.speechSynthesis.speak(speech);
 }
 </script>
 </div>
</body>

</html>
```

![run it](https://cloud-5m2nwfs8r.vercel.app/ezgif.com-video-to-gif-4.gif)

### Hacking time!

Now you know how to Convert text to speech. You should not stop here. You need to learn more.

#### Advantages of Converting text to speech.

Text-to-speech systems, also known as TTS, were first developed to aid the visually impaired by offering a computer-generated spoken voice that would read text to the user.

Assistance with reading success and confidence

Students with ASD who require help with engagement in writing and reading
etc...

You can do a lot of things with text to speech. For example, you can make a portfolio in which you can play a voice about yourself it will be cool.

Lastly, don't get stuck.

I am attaching the documentation for HTML, CSS, and JS

[html](https://developer.mozilla.org/en-US/docs/Web/HTML)

[css](https://developer.mozilla.org/en-US/docs/Web/CSS)

[js](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Modified by other hackers.

[Alfred Jophy](https://repl.it/@HariprasadR03/haroadas#main.py) He has made a back button and a quit button also added multiple slides.

[Kk Haridev](https://repl.it/@DandaThor/harri-kkkkk#main.py) He extended it to many slides and added glitter to the project.

[Joyal Thomas](https://repl.it/@AswinPrakash/VirtualIncomparableLegacysystem#main.py) He changed the quote hub to a movie summary slideshow hub. Check it out!

![made_it](https://cloud-hbsevvws8.vercel.app/0giphy-2.gif)
