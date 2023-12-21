function main() {
    setTimeout(() => rafMisfireTest(), 100);
}

function letBrowserDoThings() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1);
    });
}

async function rafMisfireTest() {
    const div = document.createElement('div');
    div.id = "interestingDiv";
    div.style.width = "100px";
    document.body.appendChild(div);
    await letBrowserDoThings();
    const ro = new ResizeObserver(() => {
        waste(1, "rAF request");
        marknextraf(" execution");
    });
    ro.observe(div);
    await letBrowserDoThings();
    waste(10, "start");
    div.style.width = "200px";
    await letBrowserDoThings();
    waste(10, "end");
}


function marknextraf(str) {
    requestAnimationFrame(() => {
        waste(1, 'rAF'+str);
    })
}

function waste(ms, name) {
    performance.mark(name+'start');
    const start = performance.now();
    while(performance.now() - start < ms) {}
    performance.measure(name, name+'start');
}

main();