import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>AuthorQuiz</h1>
        <p>Select the book written by author shown</p>
      </div>
    </div>
  )
}

function Book({ title }) {
  return (
    <div className="answer">
      <h4>{title}</h4>
    </div>
  )
}

function Turn({ author, books, highlight }) {
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red',
    }
    return mapping[highlight]
  }

  return (
    <div
      className="row turn "
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  )
}

function Continue() {
  return <div></div>
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from
          <a href="http://commons.wikimedia.org/wiki/Main_Page">
            Wikemedia Commons
          </a>
          and are in the public domain
        </p>
      </div>
    </div>
  )
}

function AuthorQuiz({ turnData, highlight }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} />
      <Continue />
      <Footer />
    </div>
  )
}

export default AuthorQuiz
