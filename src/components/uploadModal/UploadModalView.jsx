import * as React from "react";
import {
  Row,
  Col,
  Label,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";

// import FileUpload from "../FileUpload";

const UploadModalView = props => {
  return (
    <Modal isOpen={true} toggle={props.closeUploadModal}>
      <ModalHeader>Upload Model</ModalHeader>
      <ModalBody>
        {/* <FileUpload /> */}
        <div className="upload-wrap">
          <Row>
            <Col xs={11} sm={11} md={11} lg={11}>
              <div className={"upload-label"}>Model</div>
              <input
                id="upload-file"
                type="file"
                onChange={e => props.handleInputFileChange(e)}
                accept=".zip, application/zip"
              />
              <Label for="upload-file">
                {props.fileName.length !== 0 ? (
                  <div>
                    <span>{props.fileName}</span>
                  </div>
                ) : (
                  <div>
                    <span>Browse</span>
                    &nbsp;for a .zip file to upload
                  </div>
                )}
              </Label>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              {props.fileName.length !== 0 ? (
                <i
                  className="nc-icon nc-simple-remove cross-btn"
                  onClick={e => props.clearInput(e)}
                />
              ) : (
                ""
              )}
            </Col>
            <Col>
              <div className="file-uplod-btn">
                {/* {this.state.isLoading
            ? "loading.."
            : !this.state.hideUploadBtn && (
                <button
                className="btn btn-sm btn-blue"
                onClick={e => {
                  this.handleUpload(e);
                }}
              >
                Upload
              </button>
                )} */}
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={11} sm={11} md={11} lg={11}>
              <div className={"upload-label"}>Task</div>
              <select id="select-task" className={"select-task"}>
                <option value="NLP">NLP</option>
                <option value="IMAGE">Image</option>
              </select>
            </Col>
          </Row>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={props.handleUpload}
          disabled={props.isDisabled}
        >
          {props.uploadButtonText}
        </Button>{" "}
        <Button color="secondary" onClick={props.closeUploadModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UploadModalView;
