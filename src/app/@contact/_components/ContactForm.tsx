export default function ContactForm(){
    return (
        <form
            className="flex flex-col justify-center"
            action={"/#about"}
        >
            <div className="flex flex-col my-1.5 lg:my-3.5">
                <label>Email</label>
                <input type="text" className="border-2 "/>
            </div>

            <div className="flex flex-col my-1.5 lg:my-3.5">
                <label>Subject</label>
                <input type="text" className="border-2 "/>
            </div>

            <div className="flex flex-col my-1.5 lg:my-3.5">
                <label>Message</label>
                <textarea className="border-2 "/>
            </div>

            <button 
                className="my-2.5 border-2 lg:my-4.5"
                type={"submit"}
            >
                Submit
            </button>
        </form>
    );
}