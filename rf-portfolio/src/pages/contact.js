import React from "react"
function Contact() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-12">
                    <section className="jumbotron">
                        <h1 className="display-4">
                            Contact
                        </h1>
                        <hr className="my-4" />
                        <div className="col-12">
                            <form>
                                <div className="form-group">
                                    <label for="name">
                                        Name
                                    </label>
                                    <input type="text" className="form-control" placeholder="Name" id="usr" />
                                </div>
                                <div className="form-group">
                                    <label for="email">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" placeholder="Email" id="email" />
                                </div>
                                <div className="form-group">
                                    <label for="message">
                                        Message
                                    </label>
                                    <textarea className="form-control" rows="3" placeholder="Talk to me"
                                        id="comment"></textarea>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-12">
                                    <p className="lead">
                                        <a className="btn btn-primary btn-lg" href="https://www.youtube.com/watch?v=73gGwGI8Z7E&t=77s" role="button" rel="noreferrer">
                                            Submit
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
export default Contact;