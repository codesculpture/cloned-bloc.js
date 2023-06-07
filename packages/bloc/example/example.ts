import { Bloc } from "../lib/bloc";


class Events {}
class Increment extends Events{}
class Decrement extends Events{}

class Counter extends Bloc<Events, number> {
    constructor() {
        super(1);
        this.on<Events>((event, emit) => {

            if(event instanceof Increment) {
                emit(this.state+ 1);
            }
            else {
                emit(this.state - 1);
            }
        }, Events);

        // this.on<Increment>((event, emit) => {
        //     emit.call(this.state + 1);
        // }, Increment)

        // this.on<Decrement>((event, emit) => {
        //     emit.call(this.state - 1);
        // }, Decrement)
    }
}

const bloc = new Counter();

bloc.listen(console.log);

bloc.add(new Increment());
bloc.add(new Decrement());

bloc.close();
// This Wont Happen At All
bloc.add(new Decrement());
