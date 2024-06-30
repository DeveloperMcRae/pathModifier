"use strict"
const Path = require ('path')
const PathModifier = class
{
  #path
  #root
  #name
  #base
  #dir
  #ext
  constructor (path)
  {
    //the original path entered.
    this.#path = path
    //the root directory of the path.
    this.#root = Path.parse (this.#path).root
    //the name of the file in the path.
    this.#name = Path.parse (this.#path).name
    //the last part of the path.
    this.#base = Path.parse (this.#path).base
    //the directory the path is in.
    this.#dir = Path.parse (this.#path).dir
    //the extension for file in path.
    this.#ext = Path.parse (this.#path).ext
  }
  getPath ()
  {
    return this.#path
  }
  getRoot ()
  {
    return this.#root
  }
  getName ()
  {
    return this.#name
  }
  getBase ()
  {
    return this.#base
  }
  getDir ()
  {
    return this.#dir
  }
  getExt ()
  {
    return this.#ext
  }
}

module.exports = PathModifier