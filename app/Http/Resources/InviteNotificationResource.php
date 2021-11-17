<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InviteNotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($data)
    {
        return [
            'data' => [
                'sender_id'         => (string)$this->sender_id,
                'user_id'         => (string)$this->user_id,
                'attributes' => [
                    'title'      => $this->title,
                    'url'       => $this->url,
                    'message'       => $this->message,
                    'created_at' => $this->created_at,
                    'updated_at' => $this->updated_at,
                ]
            ]
        ];
    }
}
