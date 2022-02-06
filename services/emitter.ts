import EventEmitter from 'eventemitter3';

export default class Emitter {

  private static instance: EventEmitter;

  private constructor() { }

  public static get(): EventEmitter {
    if (!Emitter.instance)
      Emitter.instance = new EventEmitter();

    return Emitter.instance;
  }
}


export enum EmitterEvents {
    LoginClicked = 'LoginClicked',
    ThemeChanged = 'ThemeChanged',
    LoginModalClosed = "LoginModalClosed"
}