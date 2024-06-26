//     wink-nlp
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp”.
//
//     Permission is hereby granted, free of charge, to any
//     person obtaining a copy of this software and
//     associated documentation files (the "Software"), to
//     deal in the Software without restriction, including
//     without limitation the rights to use, copy, modify,
//     merge, publish, distribute, sublicense, and/or sell
//     copies of the Software, and to permit persons to
//     whom the Software is furnished to do so, subject to
//     the following conditions:
//
//     The above copyright notice and this permission notice
//     shall be included in all copies or substantial
//     portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
//     ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
//     TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
//     PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//     DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
//     CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//     CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## selGetItemAt
/**
 * Obtains an item at the specified index from a collection.
 * @param  {number}   k         Relative index of the required item.
 * @param  {number[]} selection Array containing indexes to the selected items.
 * @param  {function} itemFn    Item function to create chainable-methods of the item.
 * @return {object}             Object containing the applicable chainable-methods
 *                              for the item found at `k`; otherwise `undefined`.
 * @private
 */
var selGetItemAt = function ( k, selection, itemFn ) {
  if ( k < 0 || k >= selection.length ) {
    throw Error( `wink-nlp: wink-nlp: ${k} is an invalid or out of bounds index.`);
  } else return itemFn( selection[ k ] );
}; // selGetItemAt()

module.exports = selGetItemAt;
