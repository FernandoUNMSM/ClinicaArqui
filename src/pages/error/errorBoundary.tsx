import React from "react";
import ErrorPage from "./index";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tieneError: false,
      mensajeError: ""
    };
  }

  static getDerivedStateFromError(error: any) {
    return { tieneError: true, mensajeError: error.message };
  }

  componentDidCatch(error: any) {
    console.log("Component did catch:", error.message);
  }

  render() {
    if (this.state.tieneError) {
      return (
        <ErrorPage/>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;