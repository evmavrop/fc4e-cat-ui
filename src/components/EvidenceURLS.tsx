import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FaLink } from "react-icons/fa";

/**
 * Small component to add url list
 */
export const EvidenceURLS = ({ urls }: { urls: string[] }) => {

    const [urlList, setUrlList] = useState<string[]>(urls)
    const [newURL, setNewURL] = useState('');
    const [error, setError] = useState('');
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    const handleRemoveURL = (index: number) => {
        const updatedUrls = urlList.filter((item, i) => i !== index);
        setUrlList(updatedUrls);
    };

    const handleAddURL = () => {
        if (newURL) {
            if (urlRegex.test(newURL)) {
                setUrlList([...urlList, newURL]);
                setNewURL('');
                setError('');
            } else {
                setError('please provide a valid url (e.g. http://example.com/path/to)');

            }

        }


    }




    return (
        <div className="mt-4 mb-3">
            <h6><strong>Evidence:</strong></h6>
            <em>Please enter a list of URLs providing evidence of your claim:</em>
            <ul className="list-group mt-2">
                {urlList.map((item, index) => (
                    <li className="list-group-item py-1" key={index}><small><FaLink /> <a className="ms-2" href={item}>{item}</a> <span className="btn btn-sm btn-light border ms-4" onClick={() => handleRemoveURL(index)} >remove</span></small></li>
                ))}
            </ul>
            <InputGroup className="mt-2" size="sm">
                <InputGroup.Text id="label-add-url">
                    URL:
                </InputGroup.Text>
                <Form.Control id="input-add-url" value={newURL} onChange={(e) => { setNewURL(e.target.value); setError('') }} aria-describedby="label-add-url" />
                <span className="btn btn-primary btn-sm" onClick={handleAddURL} >Add</span>
               
            </InputGroup>
            {error && <small className="text-danger">{error}</small>}
        </div>
    );
}
