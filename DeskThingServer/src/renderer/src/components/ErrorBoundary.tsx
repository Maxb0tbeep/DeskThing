// src/components/ErrorBoundary.tsx

import React, { Component, ReactNode, ErrorInfo } from 'react'
import Loading from './Loading'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <Loading />
    }

    return this.props.children
  }
}

export default ErrorBoundary