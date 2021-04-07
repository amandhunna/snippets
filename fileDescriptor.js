// standard io, error steam
// file descriptor::::::::::: 
// (1> path) log stream,   error will be in console, log in file
// (2> path) error stream, error will be in file,  log in console
// (2> filepath 1>&2) "moving both log and error"
//::::::::::::::::::::::::::::::::::::::::::::::::::::
function fileDescriptor() {
    try{
        console.log("one in try");
        throw new Error("error")
    } catch (ERROR) {
        console.error("one in catch");
    }
}

fileDescriptor();

// fsm, state charts and bottom-up
//1. [10,5,1].sort()            ...  ans [1, 10, 5]
//2. new Array(0,1, Array(2))   ...  ans [0, 1, [undefined, undefined]]
//3. new Date(2016, 5,31)       ...  and 2016 july 1
//4. 0.1 + 0.2                  ...  .3 0X11 4
//5. simili.length              ... and 2 (string.prototype.length returns 
// the number of bytes rather than number of characters)