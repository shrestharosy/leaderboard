import * as React from "react";
import { connect } from "react-redux";

import UploadModalView from "./UploadModalView";
import { uploadService } from "../../service";
import { error, success, warn } from "../../utils/alert.utils";
import { errorUtils } from "../../utils/error.utils";
import { buttonText } from "../../constants";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: "",
      uploadButtonText: buttonText.UPLOAD
    };
  }

  handleInputFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (reader) {
      reader.onloadend = () => {
        this.setState({
          fileName: file.name,
          file
        });
      };
      reader.readAsDataURL(file);
    } else {
      return;
    }
  };

  handleUpload = event => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const { file } = this.state;
    const task = document.getElementById("select-task").value;
    this.setState({
      uploadButtonText: buttonText.PROCESS_UPLOAD
    });
    if (file) {
      this.props
        .uploadZipFile(file, task)
        .then(response => {
          success(response.data);
          this.setState({
            uploadButtonText: buttonText.UPLOAD
          });
        })
        .catch(err => {
          const message = errorUtils.handleError(err);
          error(message);
          this.setState({
            uploadButtonText: buttonText.UPLOAD
          });
          console.log(err);
        });
    } else {
      this.setState({
        uploadButtonText: buttonText.UPLOAD
      });
      error("Something went wrong. Please try again!");
    }
  };

  clearInput = e => {
    if (this.checkIfUploadInProgress()) {
      warn("Upload in progress. Please wait!");
      return;
    }
    this.setState({
      fileName: ""
    });
  };

  closeUploadModal = () => {
    if (this.checkIfUploadInProgress()) {
      warn("Upload in progress. Please wait!");
      return;
    }
    this.props.toggleUploadModal();
  };

  checkIfUploadInProgress = () => {
    if (this.state.uploadButtonText === buttonText.PROCESS_UPLOAD) {
      return true;
    }
  };

  render() {
    const { fileName, uploadButtonText } = this.state;
    const { toggleUploadModal } = this.props;
    const isDisabled =
      uploadButtonText === buttonText.PROCESS_UPLOAD || fileName === "";
    return (
      <UploadModalView
        uploadButtonText={uploadButtonText}
        isDisabled={isDisabled}
        fileName={fileName}
        toggleUploadModal={toggleUploadModal}
        closeUploadModal={this.closeUploadModal}
        handleInputFileChange={this.handleInputFileChange}
        handleUpload={this.handleUpload}
        clearInput={this.clearInput}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  uploadZipFile: (file, task) =>
    dispatch(uploadService.uploadZipFile(file, task))
});

export default connect(
  null,
  mapDispatchToProps
)(UploadModal);
