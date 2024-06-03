/*import React, { useState } from 'react'
import StarRate from './StarRate';

function Comment() {
    const [rating, setRating] = useState(0)
    return (
        <div >
            <table>
                <tr >
                    <td colSpan={2}>Ratings: <div>
                        <StarRate rating={rating} setRating={setRating
                        } />
                    </div></td>
                </tr>

                <tr>
                    <td >Continue as Guest User  <input type='text' style={{ height: "30px" }} placeholder='Enter Your Name'></input></td>
                    <td colSpan={2}>
                        <textarea rows={3} cols={50} placeholder='Write your comment here' />
                        <button id="btn_comment2" style={{ height: "40px", width: "100px" }}> Post</button>
                    </td>
                </tr>
                <tr >
                    <td colSpan={2}>
                        Or Continue with Easy Sign Up <input type='checkbox'></input></td>
                </tr>
                <tr>
                    <td><input type='text' id="email" placeholder='Enter E-mail'></input></td>
                </tr>
                <tr>
                    <td><input type='text' id="uname" placeholder='Enter UserName'></input></td>
                </tr>
                <tr>
                    <td><textarea id="comment_signup" placeholder='write your comment here' cols={50} rows={3} ></textarea>
                        <button id="btn_comment" style={{ height: "40px", width: "100px" }}> Post</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Comment;*/


//new exp at 20.52 works fine
/*import React, { useState } from 'react';
import StarRate from './StarRate';
import './Comment.css';
function Comment() {
    const [rating, setRating] = useState(0);

    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [user_name, setUserName] = useState('');
    const [signup, setSignup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            recipe_id: recipeId,
            rating,
            user_name,
            comment,
            email

        };

        try {
            console.log(payload)
            const response = await fetch('https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/postcomments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Comment posted successfully!');
                setRating(0); // Reset the rating
                setComment(''); // Reset the comment
                setEmail(''); // Reset the email
                setUserName(''); // Reset the user name
                setSignup(false); // Reset the signup checkbox
            } else {
                alert('Failed to post comment.');
            }
        } catch (error) {
            console.error('Error posting comment:', error);
            alert('Failed to post comment.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table className='comment_tbl'>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                Rate this recipe:
                                <div>
                                    <StarRate rating={rating} setRating={setRating} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Continue as Guest User
                                <input
                                    type='text'
                                    style={{ height: "30px" }}
                                    placeholder='Enter Your Name'
                                    value={user_name}
                                    onChange={(e) => setGuestName(e.target.value)}
                                />
                            </td>

                            <td colSpan={2}>
                                Write your Comment here
                                <textarea
                                    rows={3}
                                    cols={50}
                                    placeholder='Write your comment here'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button className='btn_comment1' type="submit" id="btn_comment2" style={{ height: "40px", width: "100px" }}>Post</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                Or Continue with Easy Sign Up
                                <input
                                    type='checkbox'
                                    checked={signup}
                                    onChange={() => setSignup(!signup)}
                                />
                            </td>
                        </tr>
                        {signup && (
                            <>
                                <tr>
                                    <td><input type='text' id="email" placeholder='Enter E-mail' value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td><input type='text' id="uname" placeholder='Enter UserName' value={user_name} onChange={(e) => setUserName(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <textarea
                                            id="comment_signup"
                                            placeholder='write your comment here'
                                            cols={50}
                                            rows={3}
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                        <button type="submit" className='btn_comment2' id="btn_comment" style={{ height: "40px", width: "100px" }}>Post</button>
                                    </td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Comment;*/
// new exp for commetn id 23.59 PM
import React, { useState } from 'react';
import StarRate from './StarRate';
import './Comment.css';

function Comment({ recipeId }) { // Accept recipeId as a prop
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [user_name, setUserName] = useState('');
    const [signup, setSignup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            recipe_id: recipeId, // Include recipeId in the payload
            rating,
            user_name,
            comment,
            email
        };

        try {
            console.log(payload);
            const response = await fetch('https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/postcomments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Comment posted successfully!');
                setRating(0); // Reset the rating
                setComment(''); // Reset the comment
                setEmail(''); // Reset the email
                setUserName(''); // Reset the user name
                setSignup(false); // Reset the signup checkbox
            } else {
                alert('Failed to post comment.');
            }
        } catch (error) {
            console.error('Error posting comment:', error);
            alert('Failed to post comment.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table className='comment_tbl'>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                Rate this recipe:
                                <div>
                                    <StarRate rating={rating} setRating={setRating} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Continue as Guest User
                                <input
                                    type='text'
                                    style={{ height: "30px" }}
                                    placeholder='Enter Your Name'
                                    value={user_name}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </td>
                            <td colSpan={2}>
                                Write your Comment here
                                <textarea
                                    rows={3}
                                    cols={30}
                                    placeholder='Write your comment here'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button className='btn_comment1' type="submit" id="btn_comment2" style={{ height: "40px", width: "100px" }}>Post</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                Or Continue with Easy Sign Up
                                <input
                                    type='checkbox'
                                    checked={signup}
                                    onChange={() => setSignup(!signup)}
                                />
                            </td>
                        </tr>
                        {signup && (
                            <>
                                <tr>
                                    <td><input type='text' id="email" placeholder='Enter E-mail' value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td><input type='text' id="uname" placeholder='Enter UserName' value={user_name} onChange={(e) => setUserName(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <textarea
                                            id="comment_signup"
                                            placeholder='write your comment here'
                                            cols={50}
                                            rows={3}
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                        <button type="submit" className='btn_comment2' id="btn_comment" style={{ height: "40px", width: "100px" }}>Post</button>
                                    </td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Comment;