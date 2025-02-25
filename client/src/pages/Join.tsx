import React, { useState } from 'react';
import { Poll } from 'shared/poll-types';
import { makeRequest } from '../api';
import { actions, AppPage } from '../state';

export const Join: React.FC = () => {
    const [pollID, setPollID] = useState('');
    const [name, setName] = useState('');
    const [apiError, setApiError] = useState('');

    const areFieldsValid = (): boolean => {
        if (pollID.length < 6 || pollID.length > 6) {
            return false;
        }

        if (name.length < 1 || name.length > 25) {
            return false;
        }

        return true;
    };

    const handleJoinPoll = async () => {
        actions.startLoading();
        setApiError('');

        const { data, error } = await makeRequest<{
            poll: Poll;
            accessToken: string;
        }>('/polls/join', {
            method: 'POST',
            body: JSON.stringify({
                pollID,
                name,
            }),
        });

        if (error && error.statusCode === 400) {
            setApiError('Please make sure to include a poll topic!');
        } else if (error && !error.statusCode) {
            setApiError('Unknown API error');
        } else {
            actions.initializePoll(data.poll);
            actions.setPollAccessToken(data.accessToken);
            actions.setPage(AppPage.WaitingRoom);
        }

        actions.stopLoading();
    };

    return (
        <div className="flex flex-col items-stretch justify-around w-full h-full max-w-sm mx-auto">
            <div className="mb-12">
                <div className="my-4">
                    <h3 className="text-center">
                        Enter Code Provided by &quot;Friend&quot;
                    </h3>
                    <div className="w-full text-center">
                        <input
                            maxLength={6}
                            onChange={(e) => setPollID(e.target.value.toUpperCase())}
                            className="w-full box info"
                            autoCapitalize="characters"
                            style={{ textTransform: 'uppercase' }}
                        />
                    </div>
                </div>
                <div className="my-4">
                    <h3 className="text-center">Your Name</h3>
                    <div className="w-full text-center">
                        <input
                            maxLength={25}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full box info"
                        />
                    </div>
                </div>
                {apiError && (
                    <p className="mt-8 font-light text-center text-red-600">{apiError}</p>
                )}
            </div>
            <div className="flex flex-col items-center justify-center my-12">
                <button
                    disabled={!areFieldsValid()}
                    className="w-32 my-2 box btn-orange"
                    onClick={handleJoinPoll}
                >
                    Join
                </button>
                <button
                    className="w-32 my-2 box btn-purple"
                    onClick={() => actions.startOver()}
                >
                    Start Over
                </button>
            </div>
        </div>
    );
}