import './App.css';

function App() {
  return (
    <div className="app">
      <div className='title'>Lab 10c</div>
      <div>
        <div className='info'>
          <div className='line'>For 10c, I used React and GitHub Pages to host the web page.</div>
          <div className='line'>To install React, I ran: <code className='code'>npm create-react-app client</code></div>
          <div className='line'>This created a new folder called <code>client</code> with all the necessary dependencies for React.</div>
          <br/>   
          <div className='line'>To host the page on GitHub Pages, I needed to install the <code>gh-pages</code> package using npm.</div>
          <div className='line'>This was done by running <code>npm install gh-pages --save-dev</code>inside the <code>client</code> folder.</div>
          <div className='line'>Then the website homepage url and the deployment scripts needed to be added to the <code>package.json</code></div>
          <div className='line'>so that the app could be deployed with<code>npm run deploy</code> to be hosted.</div>
          <br/>
          <div className='line'>Overall, I did not have many difficulties as I have experience with React. Also, the page is static, so</div>
          <div className='line'>I did not encounter many of the difficulties associated with more complicated, dynamic web pages.</div>
          <div className='line'>GitHub Pages was free and easy to use, so deploying the web page was very simple as well.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
