/**
 * For this exercise you will be strengthening your page-fu mastery. 
 * You will complete the PaginationHelper class, which is a utility 
 * class helpful For querying paging information related to an array.

The class is designed to take in an array of values and an integer 
indicating how many items will be allowed per each page. 
The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
 */

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection
        this.itemsPerPage = itemsPerPage

    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length
    }
    pageCount() {
        // returns the number of pages
        if (this.collection.length > 0 && this.collection.length < this.itemsPerPage) {
            return 1
        }

        return this.itemsPerPage === this.itemsPerPage && Number.isInteger(this.itemsPerPage / this.collection.length) ?
            this.collection.length / this.itemsPerPage : Math.ceil((this.collection.length / this.itemsPerPage))
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        let pageCount = this.pageCount()
        let collection = [...this.collection]
        let pages = []
        let elementIndex = []

        for (let i = 0; i < pageCount; i++) {

            pages.push(collection.splice(0, this.itemsPerPage))

        }

        pages.forEach((element, index) => {
            if (index === pageIndex) {
                elementIndex.push(element)
            } else {
                elementIndex
            }
        })
        return elementIndex.flat().length > 0 ? elementIndex.flat().length : -1
    }

    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        let pageCount = this.pageCount()
        let collection = [...this.collection]
        let elementIndex = ''
        let pages = []
        let itemFound = ''

        for (let i = 0; i < pageCount; i++) {

            pages.push(collection.splice(0, this.itemsPerPage))

        }

        let newCollect = pages.flat()
        newCollect.forEach((element, index) => {
            if (index === itemIndex) {
                console.log('element',element)
                elementIndex += element
            }
        })
//se debe hacer reutilizable, porque sólo funciona para una matriz de dos arrays
        // for (let i = 0; i < pages.length; i++) {
        //     console.log(pages[i])
        //     const elementsArray = pages[i];
        //     for (let j = 0; j < elementsArray.length; j++) {
        //         if (elementsArray[j] === elementIndex) {
        //             itemFound += [i];
        //             break;
        //         }
        //     }
        // }
console.log(newCollect.length)
console.log(elementIndex)
        let page3 = newCollect.indexOf(parseInt(elementIndex))
console.log('indexOf',page3)

//pageCount (número de páginas)
//Item per page
//newCollect

        //return itemFound ? parseInt(itemFound) : -1
    }
}

//const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)
const helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10)
// console.log('itemCount', helper.itemCount())
// console.log('pageCount', helper.pageCount())
// console.log('pageItemCount', helper.pageItemCount(0))
// console.log('pageItemCount', helper.pageItemCount(1))
// console.log('pageItemCount', helper.pageItemCount(2))
//console.log('pageIndex', helper.pageIndex(5))
// console.log('pageIndex', helper.pageIndex(2))
// console.log('pageIndex', helper.pageIndex(20))
// console.log('pageIndex', helper.pageIndex(-10))
console.log('pageIndex', helper.pageIndex(22)) //3


