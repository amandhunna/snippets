function Domain1() {
    const domain2 = "http://localhost:3000"
    let windowRef;
    useEffect(() => {
        window.addEventListener("message", (event) => {
            const txt = document.querySelector("#response");
            txt.innerHTML = `${event.data.token}`;
        });
    }, []);

    const sendPostMessage = () => {
        windowRef.postMessage({ token: "secret from  domain 1" }, "*");
    }

    function openTab() {
        windowRef = window.open(domain2, "Test", "location=1,status=1,scrollbars=1,width=450,height=550");
    }

    return (
        <div className="App">
            <input
                type="button"
                id="btnopen"
                value="Open child"
                onClick={() => openTab()}
            />
            <button onClick={() => sendPostMessage()}>Send value to Domian2</button>
        Response received: <div id="response"></div>
        </div>
    );
}


function Domain2() {

    const sendPostMessage = () => {
        window.opener.postMessage({ token: "secret token from domain2" }, "*");
    }

    useEffect(() => {
        window.addEventListener("message", (event) => {
            const txt = document.querySelector("#response");
            txt.innerHTML = `${event.data.token}`;
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div id='response'></div>
                <button onClick={() => sendPostMessage()}>Send value to opener/Domain1</button>
            </header>
        </div>
    );
}
