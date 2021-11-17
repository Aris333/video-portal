<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShareFolderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'id'         => (string)$this->id,
                'type'       => 'shares',
                'attributes' => [
                    'protected'  => (int) $this->protected,
                    'item_id'    => (int) $this->item_id,
                    'token'      => $this->token,
                    'link'       => $this->link,
                    'type'       => $this->type,
                    'created_at' => $this->created_at,
                    'updated_at' => $this->updated_at,
                ]
            ]
        ];
    }
}
