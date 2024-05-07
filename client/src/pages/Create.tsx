import React, { useState } from "react"
import CountSelector from "../components/ui/CountSelector"

export const Create: React.FC = () => {
    const [pollTopic, setPollTopic] = useState('')
    const [maxVote, setMaxVote] = useState(3)
    const [name, setName] = useState('')


    return (
        <div className="flex flex-col items-stretch justify-around w-full h-full max-w-sm mx-auto">
            <div className="mb-12">
                <h3 className="text-center">Enter Poll Topic</h3>
                <div className="w-full text-center">
                    <input
                        maxLength={100}
                        onChange={(e) => setPollTopic(e.target.value)}
                        className="w-full box info"
                    />
                </div>
                <h3 className="mt-4 mb-2 text-center">Votes Per Participant</h3>
                <div className="w-48 mx-auto my-4">
                    <CountSelector
                        min={1}
                        max={5}
                        initial={3}
                        step={1}
                        onChange={(val) => setMaxVote(val)}
                    />
                </div>
                <div className="mb-12">
                    <h3 className="text-center">Enter Name</h3>
                    <div className="w-full text-center">
                        <input
                            maxLength={25}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full box info"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <button
                    className="w-32 my-2 box btn-orange"
                    onClick={() => console.log('createPoll')}
                    disabled={false}
                >
                    Create
                </button>
                <button
                    className="w-32 my-2 box btn-purple"
                    onClick={() => console.log('starting over')}
                >
                    Start Over
                </button>
            </div>
        </div>
    )
}