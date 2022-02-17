import { Reducer, useReducer, useState } from 'react';

import { Button, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import { FormStyled } from '../../styles/components/forms/AddPost.styles';

interface StateType {
  createdByUser?: string;
  summary: string;
  entity: string;
  victim?: string;
  description: string;
  location?: string;
  source?: string | string[];
  videoUrl?: string;
}

const AddPost = ({ user }: { user: string }) => {
  const [state, setState] = useReducer<Reducer<StateType, Partial<StateType>>>(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      createdByUser: user || undefined,
      summary: '',
      entity: '',
      victim: undefined,
      description: '',
      location: undefined,
      source: undefined,
      videoUrl: undefined,
    }
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ [name]: value });

    // setState((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  const postForm = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    await fetch('/api/post/add', {
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => {
        // If success or validation error
        if (response.status >= 200 && response.status < 300) {
          setIsLoading(false);
          return response.json();
        }
        throw Error(response.statusText);
      })
      .catch((error) => {
        // Server error
        console.error('[AddPost] Error creating post: ', error);
        setIsLoading(false);
      });
  };
  return (
    <FormStyled onSubmit={(event) => postForm(event)}>
      <Input
        id="summary"
        name="summary"
        placeholder="Briefly summarize the offence"
        value={state.summary}
        onChange={handleChange}
        required
      />
      <Input
        id="entity"
        name="entity"
        placeholder="Offending person or company"
        value={state.entity}
        onChange={handleChange}
        required
      />
      <Input
        id="victim"
        name="victim"
        placeholder="(optional) A specific individual that was wronged"
        value={state.victim}
        onChange={handleChange}
      />
      <Input
        id="location"
        name="location"
        placeholder="(optional) City, State, Country where the offence occurred"
        value={state.location}
        onChange={handleChange}
      />
      <Input
        id="source"
        name="source"
        placeholder="Please include as many sources as possible, at least one video source is recommended"
        value={state.source}
        onChange={handleChange}
      />
      <TextArea
        id="description"
        name="description"
        placeholder="What did they do to deserve shame?"
        rows={4}
        className="w-full"
        value={state.description}
        onChange={handleChange}
        required
      />
      <Button
        htmlType="submit"
        type="primary"
        size="large"
        className="mt-12 bg-gray-900 font-bold text-xl flex-center"
        loading={isLoading}
      >
        Send
      </Button>
    </FormStyled>
  );
};

export default AddPost;
