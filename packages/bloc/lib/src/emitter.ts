
type emitterCallback<State> = (state: State) => void

export class Emitter<State> {
  private isCanceled:boolean = false;
  private isCompleted: boolean = false;

  private emit: emitterCallback<State>;

  private get isDone(): boolean {return this.isCompleted || this.isCanceled; } 

  constructor(emit: emitterCallback<State>) {
    this.emit = emit;
  }

  call(state: State){
    if(!this.isCanceled) this.emit(state);
  }

  cancel(){
    if(this.isDone) return;
    this.isCanceled = true;

  }
  complete() {
    if(this.isDone) return;
    this.isCompleted = true;
  }

  close() {
  }
}