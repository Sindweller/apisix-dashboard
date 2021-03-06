/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react'
import { Form, Select } from 'antd'

type Props = {
  readonly?: boolean
}

const PassiveCheckTypeComponent: React.FC<Props> = ({ readonly }) => {
  const options = [
    {
      label: "HTTP",
      value: "http"
    }, {
      label: "HTTPs",
      value: "https"
    }, {
      label: "TCP",
      value: "tcp"
    }
  ]

  return (
    <Form.Item
      label="Type"
      name={['checks', 'passive', 'type']}
      rules={[{ required: true }]}
    >
      <Select disabled={readonly}>
        {options.map(item => {
          return (
            <Select.Option value={item.value} key={item.value}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
  )
}

export default PassiveCheckTypeComponent
