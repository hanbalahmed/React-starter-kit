# React HTML

#### you can have components like this in the screenshot below
![image](https://lh3.googleusercontent.com/-3K9Wq4ekjuI/X_f4FB-GxcI/AAAAAAAAATo/6fvouR2SJjUdmQINw6Dm02b-nIIpx-HXgCK8BGAsYHg/s0/2021-01-07.png)

But you can have components in your css. Note that there is a folder called `imports`. inside of that folder we have an `imports.css`, that file imports everything of css.

There is also a folder in our css which is called `components`. Inside that folder we can have our styles

it will look like this

```js
return (
    <div className="main__header">
      <h1>React App</h1>
    </div>
);

ReactDOM.render(<Main />, document.getElementById("app"));
```

we can have a seperate file for the `main__header`

# thats how this works

## if you are using it for production then replace these links

```html
 <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
 <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

## with these links
```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

**_Enjoy!_**
