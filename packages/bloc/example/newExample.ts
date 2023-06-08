import { Bloc } from "../lib/bloc";

class CounterEvent {}
class Increment extends CounterEvent {}
class Decrement extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, number> {
    constructor() {
        super(0);

        this.on<Increment>((event, emit) => {
            emit(this.state + 1);
        }, Increment);
        this.on<Decrement>((event, emit) => {
            emit(this.state - 1);
        }, Decrement);
    }
}


const newBloc = new CounterBloc();

newBloc.listen(console.log);

newBloc.add(new Decrement())
newBloc.add(new Increment())
