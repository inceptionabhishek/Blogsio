import React from "react";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Form, Button, FloatingLabel } from "react-bootstrap";
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [thumbnail,setThumbnail] = useState(props.thumbnail);

  return (
    <div>
      <h1 className="d-flex justify-content-center">
        Update <EditIcon />
      </h1>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              type="text"
              placeholder="Enter Title of the post"
            />
          </Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Body">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "300px" }}
            />
          </FloatingLabel>
          <Form.Label>Thumbnail of the Blog</Form.Label>
          <Form.Control
            type="file"
            placeholder="Image"
            onChange={(event) => setThumbnail(event.target.files[0])}
          />
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Update;
