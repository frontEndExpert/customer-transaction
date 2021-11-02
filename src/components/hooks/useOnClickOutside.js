import React, {useEffect} from 'react';

function useOnClickOutside(ref, handler) {

    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };

            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },[ref, handler]);
        // Consumers can consider memo'ing handler
        // Can ref it like before
}
export default useOnClickOutside;

/*
function App() {
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false);

    useOnClickOutside(ref, () => setModalOpen(false));

    return (
        <div>
            {isModalOpen ? (
            <div ref={ref}>
                👋 Click anywhere outside to close.
            </div>
            ) : (
            <button onClick={() => setModalOpen(true)}>
                 Open Modal
            </button>
            )}
        </div>
    );
}

*/