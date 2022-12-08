import { Injectable } from "@angular/core";
import { BookModel } from 'src/app/models/book.model';

@Injectable({
    providedIn: 'root'
})

export class BookService{
    private book: BookModel[] = [
        {
            id: 1,
            title: "Harry Potter",
            resume: "An english magic wizard, we will see the aventure during this book.",
            author: 'JK Rowling',
            isAvailable: true,
            imgUrl: 'https://imgs.search.brave.com/zhHh4Lvf7Z31oy2he-lIxVb-vAYwFEyqbBFCilTIhlo/rs:fit:314:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/NENWb0Q1ZlBjWkM0/RVBRZUtvY19RSGFM/TCZwaWQ9QXBp' 
        },

        {
            id: 2,
            title: "One Piece",
            resume: "An history of pirate who want to find an secret and popular treasure.",
            author: 'Eiichirō Oda',
            isAvailable: true,
            imgUrl: 'https://imgs.search.brave.com/QlMhj5srDYE3vmC15WuUCYlnhQQQ6a2QEMgHClHIx8Q/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/MXJaV002eXZyVW5o/VUw2VGtHNFpRSGFM/SCZwaWQ9QXBp' 
        },

        {
            id: 3,
            title: "Naruto",
            resume: "An history of a ninja who have a demon in is stomach.",
            author: 'Masashi Kishimoto',
            isAvailable: false,
            imgUrl: 'https://imgs.search.brave.com/4Z0iLjlm3OBc5tcId4DOjQizc_HErshiT5yQkpDdJwI/rs:fit:320:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/cEZtWWN5Y01LZE9P/SHVibnVBZXR3SGFL/OCZwaWQ9QXBp' 
        },
    ]

    getAllBooks (): BookModel[] {
        return this.book
    }

    getBook (id: number): BookModel {
        const myBook = this.book.find(book => book.id === id)
        if (myBook) {
            return myBook
        } else {
            throw new Error('Books not found !')
        }
    }

    getBookAvailable (): BookModel[]{
        const avBook = this.book.filter(book => book.isAvailable === true)
        if (avBook) {
            return avBook
        } else {
            throw new Error ('Books not found !')
        }
    }

    setAvailable(id: number): void {
        const myBook = this.getBook(id)
        if (myBook) {
            myBook.isAvailable ? myBook.isAvailable = false : myBook.isAvailable = true
        } else {
            throw new Error('FaceSnap not found !')
        }
    }
}