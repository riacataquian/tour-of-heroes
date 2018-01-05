import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  /**
    * add() pushes new entry of message to the messages cache.
    */
  add(message: string) {
    this.messages.push(message);
  }

  /**
    * clear() clears out messages cache.
    */
  clear() {
    this.messages = [];
  }
}
