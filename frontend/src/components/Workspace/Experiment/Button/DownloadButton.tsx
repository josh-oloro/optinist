import React, { useState, useRef } from 'react'
import IconButton from '@mui/material/IconButton'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import { useSelector } from 'react-redux'
import {
  downloadExperimentConfigApi,
  downloadExperimentNwbApi,
} from 'api/experiments/Experiments'

import { ExperimentUidContext } from '../ExperimentTable'
import { selectCurrentWorkspaceId } from 'store/slice/Workspace/WorkspaceSelector'
import { downloadWorkflowConfigApi } from 'api/workflow/Workflow'
import { useSnackbar } from 'notistack'

export const NWBDownloadButton = React.memo<{
  name: string
  nodeId?: string
  hasNWB: boolean
}>(({ name, nodeId, hasNWB }) => {
  const workspaceId = useSelector(selectCurrentWorkspaceId)
  const uid = React.useContext(ExperimentUidContext)
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [url, setFileUrl] = useState<string>()
  const { enqueueSnackbar } = useSnackbar()

  const onClick = async () => {
    try {
      const responseData = await downloadExperimentNwbApi(
        workspaceId!,
        uid,
        nodeId,
      )
      const url = URL.createObjectURL(new Blob([responseData]))
      setFileUrl(url)
      ref.current?.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      enqueueSnackbar('File not found', { variant: 'error' })
    }
  }

  return (
    <>
      <IconButton onClick={onClick} color="primary" disabled={!hasNWB}>
        <SimCardDownloadOutlinedIcon />
      </IconButton>
      <a href={url} download={`nwb_${name}.nwb`} className="hidden" ref={ref}>
        {/* 警告が出るので空文字を入れておく */}{' '}
      </a>
    </>
  )
})

export const SnakemakeDownloadButton = React.memo(() => {
  const workspaceId = useSelector(selectCurrentWorkspaceId)
  const uid = React.useContext(ExperimentUidContext)
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [url, setFileUrl] = useState<string>()
  const { enqueueSnackbar } = useSnackbar()

  const onClick = async () => {
    try {
      const responseData = await downloadExperimentConfigApi(workspaceId!, uid)
      const url = URL.createObjectURL(new Blob([responseData]))
      setFileUrl(url)
      ref.current?.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      enqueueSnackbar('File not found', { variant: 'error' })
    }
  }

  return (
    <>
      <IconButton onClick={onClick}>
        <SimCardDownloadOutlinedIcon color="primary" />
      </IconButton>
      <a
        href={url}
        download={`snakemake_${uid}.yaml`}
        className="hidden"
        ref={ref}
      >
        {/* 警告が出るので空文字を入れておく */}{' '}
      </a>
    </>
  )
})

export const WorkflowDownloadButton = React.memo(() => {
  const workspaceId = useSelector(selectCurrentWorkspaceId)
  const uid = React.useContext(ExperimentUidContext)
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [url, setFileUrl] = useState<string>()
  const { enqueueSnackbar } = useSnackbar()

  const onClick = async () => {
    try {
      const responseData = await downloadWorkflowConfigApi(workspaceId!, uid)
      const url = URL.createObjectURL(new Blob([responseData]))
      setFileUrl(url)
      ref.current?.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      enqueueSnackbar('File not found', { variant: 'error' })
    }
  }

  return (
    <>
      <IconButton onClick={onClick}>
        <SimCardDownloadOutlinedIcon color="primary" />
      </IconButton>
      <a
        href={url}
        download={`workflow_${uid}.yaml`}
        className="hidden"
        ref={ref}
      >
        {/* 警告が出るので空文字を入れておく */}{' '}
      </a>
    </>
  )
})
